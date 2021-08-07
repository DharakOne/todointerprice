from flask import request
from app  import database
from app.user.models import CreateUserModel,LoadUserModel,User
from marshmallow import ValidationError
from flask_jwt_extended import create_access_token,get_jwt_identity,jwt_required
from . import user_app


@user_app.route('/signUp',methods=["POST"])
def createUser():
    data = request.get_json()
    try:
        new_user=CreateUserModel.load(data)
    except ValidationError as err:
        return {"errors": err.messages}, 422

    print(User.__name__)
    database[User.__name__].insert_one(LoadUserModel.dump(new_user))
    return "UserCretated"

@user_app.route('/signIn',methods=["POST"])
def loginUser():
    data=request.get_json()
    userData=database[User.__name__].find_one({"email":data["email"]})
    print(userData["_id"])
    
    if(userData!=None):
        user=LoadUserModel.load(userData)

        if user.verify_password(data["password"]):
            access_token = create_access_token(identity={"userName":user.userName,"email":user.email,"_id":str (userData["_id"])})
            return {"token":access_token,"userName":user.userName,"email":user.email}

    return {"error":"Password or email is no valid."}, 422

@user_app.route('/getUser',methods=["GET"])
@jwt_required()
def get_user():
    current_user = get_jwt_identity()
    print(current_user)
    return current_user