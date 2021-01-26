from app.main import db
from sqlalchemy_serializer import SerializerMixin
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Model, SerializerMixin):
    __tablename__ = "users"
    serialize_rules = ()
    serialize_only = ()
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(6), unique=True, index=True)
    email=db.Column(db.String(60),unique=True,key="email")
    password_hash = db.Column(db.String(128))

    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')
    
    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return "<User %r > " % self.username
