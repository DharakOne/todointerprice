from flask import request
from app  import database
from app.user.models import CreateUserModel,LoadUserModel,User
from marshmallow import ValidationError
from . import user_app


@user_app.route('/signUp',methods=["POST"])
def createUser():
    data = request.get_json()
    try:
        new_user=CreateUserModel.load(data)
    except ValidationError as err:
        print(err.messages)
        print(err)
        return {"errors": err.messages}, 422

    print(User.__name__)
    database[User.__name__].insert_one(LoadUserModel.dump(new_user))
    return "UserCretated"

@user_app.route('/a',methods=["GET"])
def getUsers():
    print("aa")
    user=User.find_one({})
    return  user

