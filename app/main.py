import os
from flask import  Flask 
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager


app=Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, 'data.sqlite')

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config.from_envvar('ENV_FILE_LOCATION')


db = SQLAlchemy(app)
jwt = JWTManager(app)

CORS(app)

@app.route('/')
def hola_mundo():
    return {"data":["Junior","Benjamin","Castro","Flores"]}

@app.route("/restart")
def refresh_database():
    db.drop_all()
    db.create_all()
    return "<h1> The database was restarted <h1>"



from app.auth.index import init_auth_resourse

init_auth_resourse(app)

#Shell flask

from utils.shell import make_shell_context

@app.shell_context_processor
def load_shell():
    return  make_shell_context(db)