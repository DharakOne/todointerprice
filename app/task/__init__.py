from flask import Blueprint

task_app=Blueprint("task",__name__)

from .views import task_app