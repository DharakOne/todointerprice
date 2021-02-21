from app  import database
from app.user.models1 import CreateUserSchema,LoadUserShema
from . import user_app

create_user_model= CreateUserSchema()
load_user_model=LoadUserShema()

@user_app.route("/createUser")
def createUser():
    data={"name":"Junior","email":"junior@gmail.com","edad":25,"password":"akakak"}
    new_user=create_user_model.load(data)
    database.User.insert_one(load_user_model.dump(new_user))
    return "UserCretated"