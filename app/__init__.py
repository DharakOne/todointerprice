import os
from flask import Flask,current_app
from flask_cors import CORS
from flask_jwt_extended import JWTManager,jwt_required,get_jwt_identity
from dotenv import load_dotenv

from pymongo import MongoClient

load_dotenv()

app = Flask(__name__)

app.config.from_envvar("ENV_FILE_LOCATION")
app.config["MONGO_URI"] = os.getenv("URL_MONGODB")
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")


database = MongoClient(app.config["MONGO_URI"])["flaskApp"]
jwt = JWTManager(app)
CORS(app)



from .user import user_app

app.register_blueprint(user_app,url_prefix="/user")


@app.route('/')
def hola_mundo():

    return {"data": ["Junior", "Benjamin", "Castro", "Flores"]},422

@app.route("/clasificate", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    print(current_user)
    return "Es clasificado"