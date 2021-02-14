from flask_restful import Resource 
from .models import User
from app.main import db, app
from flask import request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import datetime
  

class  Sign_up(Resource):
    def post(self):
        print(request.json())
        name = request.json["name"]
        password =  request.json["password"]
        email=request.json["email"]

        new_user = User(username=name, email=email,password=password)
        db.session.add_all([new_user])
        db.session.commit()
        return {'succes': 'succefully'}

class Sign_in(Resource):
    def post (self):
        body = request.get_json()

        user =User.query.filter_by(email=body.get('email')).first()
        if user==None:
            return {"error":'Email or password invalid' }, 401

        authorized = user.verify_password(body.get('password'))
        if not authorized:
            return {'error': 'Email or password invalid'}, 401
        
        expires = datetime.timedelta(days=7)
        access_token = create_access_token(identity=str(user.id), expires_delta=expires)
        return {'token': access_token,"user":user.to_dict(only=('email', 'username'))}, 200

class User_handled(Resource):
    @jwt_required
    def get(self):
        user_id=get_jwt_identity()
        my_user =User.query.filter_by(id=user_id).first()
        print(my_user)
        return my_user.to_dict()
        