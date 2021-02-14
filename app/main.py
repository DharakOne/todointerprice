import os
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
from flask_mongoengine import MongoEngine

load_dotenv()

app = Flask(__name__)
CORS(app)
db = MongoEngine(app)
jwt = JWTManager(app)
 
basedir = os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__)
app.config.from_envvar("ENV_FILE_LOCATION")
app.config["MONGODB_HOST"]=os.getenv("URL_MONGODB")

  
class User(db.Document):
    email = db.StringField(required=True)

@app.route('/')
def hola_mundo():
    ross = User(email='ross@example.com')
    ross.save()
    return {"data": ["Junior", "Benjamin", "Castro", "Flores"]}


