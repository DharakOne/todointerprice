from os import name
from flask import request
from marshmallow import ValidationError
from bson.objectid import ObjectId
import datetime
from flask_jwt_extended import get_jwt_identity, jwt_required
from pymongo import DESCENDING, ASCENDING

from math import ceil
from app import database, user
from . import task_app
from .models import TaskLoad, TaskCreate, TaskBase

modelTaskCreate = TaskCreate()
modelTaskLoad = TaskLoad()

TaskDatabase = database[TaskBase.DatabaseName]


@task_app.route("/createTask", methods=["POST"])
@jwt_required()
def createTask():
    current_user = get_jwt_identity()
    data = request.get_json()
    print(current_user)
    data["idUser"] = str(current_user["_id"])
    try:
        new_task = modelTaskCreate.load(data)
    except ValidationError as err:
        return {"errors": err.messages}, 422

    print(modelTaskCreate.dump(new_task))

    database[TaskBase.DatabaseName].insert_one(modelTaskCreate.dump(new_task))
    return "UserCretated"


@task_app.route("/getTask", methods=["POST"])
@jwt_required()
def getTask():
    current_user = get_jwt_identity()
    userId = current_user['_id']

    data = request.get_json()
    numberActivate = data["numberActivate"]
    dataUser = {"idUser": userId}


    if data['filter'] == {'name': ''}:
        filter = dataUser
    else:
        rexFilter={"name":{'$regex':data["filter"]["name"],"$options" : "i"}}
        filter = {**dataUser, **rexFilter}

    getData = TaskDatabase.find(filter).sort("_id",DESCENDING).skip((numberActivate-1)*8).limit(8)
    getData = list(getData)
    numDocuments = TaskDatabase.find({"idUser": userId}).count()
    maxPage = ceil(numDocuments/8)
    maxRange = 0
    isMaxRange = False
    if (ceil(maxPage/5)*5-numberActivate) < 5:
        maxRange = maxPage - (ceil(maxPage/5)-1)*5
        isMaxRange = True
        if(numDocuments == 0):
            maxRange = 0

    else:
        isMaxRange = False
        maxRange = 5

    rangeTeeth = []
    for i in range(1, maxRange+1):
        rangeTeeth.append((ceil(numberActivate/5)-1)*5+i)
    for i in getData:
        i["_id"] = str(i["_id"])
    return {"Tasks": getData, "nu": numDocuments, "rangeTeeth": rangeTeeth, "isMax": isMaxRange}

@task_app.route("/deleteTask", methods=["POST"])
@jwt_required()
def deleteTask():
    current_user = get_jwt_identity()
    userId = current_user['_id']
    data = request.get_json()
    idTask=data["idTask"]
    _id=ObjectId(idTask)
    TaskDatabase.delete_one({"_id":_id,"idUser":userId})
    return {"Task Was Delete":"sd"}

@task_app.route("/check", methods=["POST"])
@jwt_required() 
def checkTask():
    current_user = get_jwt_identity()
    userId = current_user['_id']
    data = request.get_json()
    done =data["done"]
    idTask=data["idTask"]
    _id=ObjectId(idTask)
    newValue={"$set":{"done":done}}
    TaskDatabase.update_one({"_id":_id,"idUser":userId},newValue)
    return "It was updated."

@task_app.route("/updateTask", methods=["POST"])
@jwt_required()
def updateTask():
    current_user = get_jwt_identity()
    userId = current_user['_id']
    data = request.get_json()
    print(data)
    idTask=data["_id"]
    _id=ObjectId(idTask)
    newValue={"$set":{"company":data["company"], "assigned":data["assigned"], "name":data["name"],"endDate":data["endDate"], "description":data["description"], "done":data["done"]}}
    jk=TaskDatabase.update_one({"_id":_id,"idUser":userId},newValue)
    print(jk.acknowledged)
    return " It was updated"
