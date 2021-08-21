from marshmallow import Schema, fields,pre_load, validate,EXCLUDE, ValidationError, validates_schema,post_load,post_dump
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import  datetime
from app.utils.model import Model
from app import database



def stringValidate(nameProperty,min=1,max=255):
    def callback(value):
        errors = {}
        if (len(value)>=max):
            errors[nameProperty] =["{} must be less than {} letters".format(nameProperty,max)]
            raise ValidationError (errors)
        if (len(value)<min):
            errors[nameProperty] = ["{} must have a minimun of {} letters".format(nameProperty,min)]
            raise ValidationError(errors)
    return callback

def oneOfValidate(nameProperty,list):
    def callback(value):
        if not (value in list):
            raise ValidationError("Please choose a valid value  to {} ".format(nameProperty))
    return callback

def phoneNumberValidate(value):
    try: 
        int(value)
    except:
        raise ValidationError("Please enter a valid number to phone number")

def emailUniqueValidate(value:str):
    error:str =None
    if not (value.find(".com")!=-1 and value.find("@")!=-1):
            error={"error":["Email is no valid"]}
            raise ValidationError(error)
    
    if database["User"].find_one({"email":value}):
        
        error={"error":["Email already have create. Please enter other email"]}
        raise ValidationError(error)
    



class User(Model):
    def __init__(self,userName,email,phoneNumber,password_hash,creation_date,last_update_date,**kwargs):

        self.userName=userName 
        self.email = email
        self.phoneNumber=phoneNumber
        self.password_hash=password_hash
        self.creation_date=creation_date
        self.last_update_date=last_update_date
       
    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)




class UserSchema(Schema):
    userName = fields.Str(required=True,validate=[stringValidate("User Name")])
    email = fields.Email(required=True)
    phoneNumber=fields.String(required=True,validate=[validate.Length(min=8),phoneNumberValidate])
    creation_date=fields.DateTime(required=True,format="%Y-%m-%dT%H:%M:%S.%fZ")
    last_update_date=fields.DateTime(required=True,format="%Y-%m-%dT%H:%M:%S.%fZ")

    class Meta:
            unknown = EXCLUDE


class CreateUserSchema(UserSchema):
    password=fields.String(required=True)
    vPassword=fields.String(required=True)
    
    @pre_load
    def verify_data_pre_load(self, data, **kwargs):
        emailUniqueValidate(data["email"])
        stringValidate("Password",min=5)(data["password"])

        if not (data["vPassword"]==data["password"]):
            error={"errors":["Password and Verify password is not same."]}
            raise ValidationError(error)
        
        data["creation_date"]=datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ")
        data["last_update_date"]=datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ")


        return data

    @post_load
    def make_user(self, data, **kwargs):
        data["password_hash"]=generate_password_hash(data["password"])

        return User(**data)
    

class LoadUserShema(UserSchema):
    password_hash=fields.String(required=True)
    @post_load
    def make_user(self, data, **kwargs):
        return User(**data)

    @post_dump
    def make_dict(self,data,**kwargs):
        return data

CreateUserModel= CreateUserSchema()
LoadUserModel=LoadUserShema()