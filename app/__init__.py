import os
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
from flask_pymongo import PyMongo

load_dotenv()

app = Flask(__name__)

app.config["MONGO_URI"] = os.getenv("URL_MONGODB")
app.config.from_envvar("ENV_FILE_LOCATION")

database = PyMongo(app).db
CORS(app)
jwt = JWTManager(app)
app = Flask(__name__)


from .user import user_app

app.register_blueprint(user_app)

@app.route('/')
def hola_mundo():
    return {"data": ["Junior", "Benjamin", "Castro", "Flores"]}



