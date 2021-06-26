import re
from flask import request
from marshmallow import ValidationError
from bson.objectid import ObjectId
import datetime

from math import ceil

from app import database


from . import task_app
from .models import TaskShema, TaskBase

modelTask = TaskShema()

TaskDatabase = database[TaskBase.DatabaseName]


@task_app.route("/createTask", methods=["POST"])
def createTask():
    data = request.get_json()
    try:
        new_task = modelTask.load(data)
    except ValidationError as err:
        return {"errors": err.messages}, 422
    print("Pase todo esto")

    database[TaskBase.DatabaseName].insert_one(modelTask.dump(new_task))
    return "UserCretated"


@task_app.route("/getTask", methods=["POST"])
def getTask():
    data = request.get_json()
    numberActivate = data["numberActivate"]
 
    getData = list(TaskDatabase.find({}).skip((numberActivate-1)*8).limit(8))
    numDocuments = TaskDatabase.count({})
    maxPage=ceil(numDocuments/8)
    maxRange=0
    isMaxRange=False
    if (ceil(maxPage/5)*5-numberActivate)<5:
        maxRange= maxPage -(ceil(maxPage/5)-1)*5
        isMaxRange=True

    else:
        isMaxRange=False
        maxRange=5


    rangeTeeth=[]
    for i in range(1,maxRange+1):
        rangeTeeth.append((ceil(numberActivate/5)-1)*5+i)
    for i in getData:
        i["_id"]=str (i["_id"])

    return {"Tasks": getData, "nu": numDocuments,"rangeTeeth":rangeTeeth,"isMax":isMaxRange}


@task_app.route("/createData", methods=["GET"])
def createData():
    def createDocument(i):
        documentDefault = {"createdDateSystem": "2021-06-05T12:11:54.675552Z",
                           "company": " JunComp",
                           "endDate": "2021-09-05T17:53:18.966256Z",
                           "done": False,
                           "createdDate": "2021-06-05T17:53:18.966256Z",
                           "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga exceptur...",
                           "name": "first Task",
                           "assigned": "Junior Castro"}
        documets = []
        for i in range(0, i):
            documentDefault["name"] = "{} Task".format(i)
            documets.append(dict(documentDefault))
        return documets

    documents = createDocument(62)

    TaskDatabase.insert_many(documents)
    return {"menssage": "Data was created"}

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

