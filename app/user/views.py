from flask import request
from app  import database
from app.user.models import CreateUserModel,LoadUserModel,User
from marshmallow import ValidationError
from flask_jwt_extended import create_access_token
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
    print("-"*25) 
    print(data)
    user=database[User.__name__].find_one({"email":data["email"]})
    
    if(user!=None):
        user=LoadUserModel.load(user)
        if user.verify_password(data["password"]):
            access_token = create_access_token(identity={"email":user.email})
            return {"token":access_token}

    return {"error":"Password or email is no valid."}, 422

