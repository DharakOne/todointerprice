import os
from flask import Flask,current_app
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
#from flask_pymongo import PyMongo

from pymongo import MongoClient

load_dotenv()

app = Flask(__name__)

app.config.from_envvar("ENV_FILE_LOCATION")
app.config["MONGO_URI"] = os.getenv("URL_MONGODB")


database = MongoClient(app.config["MONGO_URI"])["flaskApp"]
jwt = JWTManager(app)
CORS(app)



from .user import user_app

app.register_blueprint(user_app,url_prefix="/user")


@app.route('/')
def hola_mundo():

    return {"data": ["Junior", "Benjamin", "Castro", "Flores"]},422



