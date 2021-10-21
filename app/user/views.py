from flask import request
from marshmallow import EXCLUDE
from app import database
from app.user.models import emailUniqueValidate, CreateUserModel, LoadUserModel, User, EdictUserShema
from marshmallow import ValidationError
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from . import user_app
from bson.objectid import ObjectId

from app import user


@user_app.route('/signUp', methods=["POST"])
def createUser():
    data = request.get_json()
    print(data)
    try:
        new_user = CreateUserModel.load(data)
    except ValidationError as err:
        print(err.messages)
        return {"errors": err.messages}, 422

    database[User.__name__].insert_one(LoadUserModel.dump(new_user))
    return "UserCretated"


@user_app.route('/signIn', methods=["POST"])
def loginUser():
    data = request.get_json()
    userData = database["User"].find_one({"email": data["email"]})
    print(userData)

    if(userData != None):
        try:
            user = LoadUserModel.load(userData)
            if user.verify_password(data["password"]):
                access_token = create_access_token(identity={
                                                   "userName": user.userName, "email": user.email, "_id": str(userData["_id"])})
                dataRequest = {"token": access_token,
                               "userName": user.userName, "email": user.email}
                print(dataRequest)
                return dataRequest
        except ValidationError as err:
            print(err.messages)
            return {"errors": err.messages}, 422

    return {"error": "Password or email is no valid."}, 422


@user_app.route('/getUser', methods=["GET"])
@jwt_required()
def get_user():
    current_user = get_jwt_identity()
    print(current_user)
    return current_user


@user_app.route('/getDataProfile', methods=["GET"])
@jwt_required()
def get_Data_Profile():
    current_user = get_jwt_identity()
    userId = current_user['_id']
    print(current_user)
    userData = database["User"].find_one({"email": current_user["email"]})
    numTask = database["Task"].find({"idUser": userId}).count()
    print("jsdhjsd llegue")

    del userData["_id"]
    del userData["password_hash"]
    print(userData)
    requestData = {"numTask": numTask, **userData}

    return requestData


@user_app.route('/updateDataUser', methods=["POST"])
@jwt_required()
def updateUserInfo():
    current_user = get_jwt_identity()
    data = request.get_json()
    ModelEdictUser = EdictUserShema(unknown=EXCLUDE)
    try:
        if "email" in data:
            if not (current_user["email"] == data["email"]):
                emailUniqueValidate(data["email"])
        print(ModelEdictUser.load(data))
    except ValidationError as err:
        return {"errors": err.messages}, 422
    userId = current_user['_id']
    userId = ObjectId(userId)
    database["User"].update_one({"_id":userId},{"$set":data})
    return {"g": "userData was updated"}
