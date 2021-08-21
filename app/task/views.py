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
    print(data)
    try:
        new_task = modelTaskCreate.load(data)
    except ValidationError as err:
        return {"errors": err.messages}, 422

    print("Pase todo esto")
    print(modelTaskCreate.dump(new_task))
    print("Pase todo esto")

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

    getData = TaskDatabase.find(filter).skip((numberActivate-1)*8).limit(8)
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
    print('rangeTeeth {}'.format (rangeTeeth) )
    return {"Tasks": getData, "nu": numDocuments, "rangeTeeth": rangeTeeth, "isMax": isMaxRange}


@task_app.route("/pyEx", methods=["GET"])
def manyExample():
    new_posts = [
        {"author": "Mike", "text": "Another post!",
         "tags": ["bulk", "insert"],
         "date": datetime.datetime(2009, 11, 12, 11, 14)},
        {"author": "Eliot",
         "title": "MongoDB is fun",
         "text": "and pretty easy too!",
         "date": datetime.datetime(2009, 11, 10, 10, 45)}]

    TaskDatabase.insert_many(new_posts)
    return {"menssage": "Data created succefully"}


@task_app.route("searhTask", methods=["POST"])
async def getTaskSearch():
    current_user = get_jwt_identity()
    userId = current_user['_id']
    data = request.get_json()
    numberActivate = data["numberActivate"]
    name = data["name"]
    if(name=={}):
        print("name is null")


    getData =  await TaskDatabase.find({"idUser": userId, "name": name}).skip(
        (numberActivate-1)*8).limit(8)
    getData = list(getData)
    numDocuments = await TaskDatabase.find({"idUser": userId}).count()
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
        dataRequest={"Tasks": getData, "nu": numDocuments, "rangeTeeth": rangeTeeth, "isMax": isMaxRange}
        print(dataRequest)
    return dataRequest
 