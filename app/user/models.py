from sqlalchemy_serializer import SerializerMixin
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Model, SerializerMixin):
    __tablename__ = "users"
    serialize_rules = ("-password_hash",)
    serialize_only = ()
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), unique=True, index=True)
    username = db.Column(db.String(10), unique=True, index=True)
    email=db.Column(db.String(60),unique=True,key="email")
    password_hash = db.Column(db.String(128))
    gender=db.Column



    def __repr__(self):
        return "<User %r > " % self.username
