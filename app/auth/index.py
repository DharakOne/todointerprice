from flask_restful import Api
from .views import Sign_up,Sign_in,User_handled

def init_auth_resourse(app):
    api=Api(app)
    api.add_resource(Sign_in,"/p/signin")
    api.add_resource(Sign_up,"/p/signup")
    api.add_resource(User_handled,"/t/user")

