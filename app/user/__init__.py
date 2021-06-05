from flask import Blueprint


user_app= Blueprint("user",__name__) 

from .views import user_app  