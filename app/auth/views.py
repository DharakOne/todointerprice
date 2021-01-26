from flask_restful import Resource
from .models import User
from app.main import db
from flask import request
from flask_jwt_extended import create_access_token, jwt_required

import datetime



class  Sign_up(Resource):
    def post(self):
        username = request.json["username"]
        password =  request.json["password"]
        email=request.json["email"]

        new_user = User(username=username, email=email,password=password)
        db.session.add_all([new_user])
        db.session.commit()
        return {'succes': 'succefully'}





class Sign_in(Resource):
    def post (self):
        body = request.get_json()

        user =User.query.filter_by(email=body.get('email')) 
        user=user[0]
        authorized = user.verify_password(body.get('password'))
        if not authorized:
            return {'error': 'Email or password invalid'}, 401
        
        expires = datetime.timedelta(days=7)
        access_token = create_access_token(identity=str(user.id), expires_delta=expires)
        return {'token': access_token}, 200

class User_handled(Resource):

    @jwt_required
    def post(self):
        body=request.get_json()
        User.objects.get(email=body.get('email'))
        authorized = user.check_password(body.get('password'))
        resultado= myQuery[0].to_dict()
        return {"users":resultado}
        