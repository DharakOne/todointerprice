from flask import Blueprint


user_app= Blueprint("user",__name__) 

from .views1 import user_app