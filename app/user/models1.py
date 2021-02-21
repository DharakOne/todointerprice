from marshmallow import Schema, fields, post_load
from werkzeug.security import generate_password_hash, check_password_hash


class User:
    def __init__(self, name, email, edad,**kwargs):
        self.name = name
        self.email = email
        self.edad = edad
        try:
            self.password_hash=kwargs["password_hash"]
        except:
            self.password_hash=generate_password_hash(kwargs["password"])

        def verify_password(self, password):
            return check_password_hash(self.password_hash, password)


class UserSchema(Schema):
    name = fields.Str(required=True)
    email = fields.Email(required=True)
    edad = fields.Int(required=True)

    @post_load
    def make_user(self, data, **kwargs):
        return User(**data)


class CreateUserSchema(UserSchema):
    password=fields.String(required=True)


class LoadUserShema(UserSchema):
    password_hash=fields.String(required=True)