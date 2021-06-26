from marshmallow import Schema, fields,pre_load, validate,EXCLUDE, ValidationError, validates_schema,post_load,post_dump
from datetime import  datetime


class TaskBase:
    DatabaseName="Task"
    def __init__(self,name,description,assigned,company,done,createdDate,endDate,createdDateSystem):
        self.name=name
        self.description=description
        self.assigned=assigned,
        self.company=company
        self.done=done
        self.createdDate=createdDate
        self.endDate=endDate
        self.createdDateSystem=createdDateSystem

class TaskFull:
    def __init__(self,**kwarg):
        super(**kwarg)
        self.id=kwarg["id"]



        
class TaskShema (Schema):
    name= fields.String(required=True,validate=validate.Length(min=3,max=100))
    description=fields.String(required=True,validate=validate.Length(min=5,max=400))
    assigned=fields.String(required=True,validate=validate.Length(min=5,max=200))
    company=fields.String(required=True,validate=validate.Length(min=5,max=100))
    done=fields.Bool()
    createdDate=fields.DateTime(required=True,format="%Y-%m-%dT%H:%M:%S.%fZ")
    endDate=fields.DateTime(required=True,format="%Y-%m-%dT%H:%M:%S.%fZ")
    createdDateSystem=fields.DateTime(required=True,format="%Y-%m-%dT%H:%M:%S.%fZ")
    @pre_load
    def fixTask(self,data,**kwargs):
        data["createdDateSystem"]=datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ")

        return data

    @post_load
    def makeTask(self,data,**kwargs):
        return TaskBase(**data)
        

