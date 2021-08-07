from marshmallow import Schema, fields,pre_load, validate,EXCLUDE, ValidationError, validates_schema,post_load,post_dump
from datetime import  datetime


class TaskBase:
    DatabaseName="Task"
    def __init__(self,name,description,assigned,company,done,createdDate,endDate,createdDateSystem,idUser,**kwargs):
        self.idUser=idUser
        self.name=name
        self.description=description
        self.assigned=assigned
        self.company=company
        self.done=done
        self.createdDate=createdDate
        self.endDate=endDate
        self.createdDateSystem=createdDateSystem 

class TaskFull (TaskBase):
    def __init__(self,**kwargs):
        super.__init__(**kwargs)
        self._id=kwargs["_id"]
        
class TaskShema (Schema):
    idUser=fields.String(required=True)
    name= fields.String(required=True,validate=validate.Length(min=1,max=100))
    description=fields.String(required=True,validate=validate.Length(min=5,max=400))
    assigned=fields.String(required=True,validate=validate.Length(min=1,max=200))
    company=fields.String(required=True,validate=validate.Length(min=1,max=100))
    done=fields.Bool(required=True)
    createdDate=fields.DateTime(required=True,format="%Y-%m-%dT%H:%M:%S.%fZ")    
    endDate=fields.DateTime(required=True,format="%Y-%m-%dT%H:%M:%S.%fZ")
    createdDateSystem=fields.DateTime(required=True,format="%Y-%m-%dT%H:%M:%S.%fZ")

class TaskCreate(TaskShema):
    @pre_load
    def fixTask(self,data,**kwargs):
        data["createdDateSystem"]=datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ")
        print(data)

        return data

    @post_load
    def makeTask(self,data,**kwargs):
        return TaskBase(**data)


class TaskLoad(TaskShema):
    _id=fields.String()

    @pre_load 
    def fixId(self,data,**kwargs):
        data["_id"]=str(data["_id"])
        return data

    @post_load
    def getTask(self,data,**kwargs):
        return TaskFull(**data)
        


    @post_dump
    def fixIdd(self,data,**kwargs):
        data["_id"]=str(data["_id"])
        return data
        

