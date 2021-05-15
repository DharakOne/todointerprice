import * as type from "./typeActions"

export function setUser({userName,email}){
    return {
        type:type.SET_USER,
        payload:{
            userName,
            email,
            loadUser:true
        }
    }
}

export function  logOut(){
    return{
        type:type.LOG_OUT,
    }
}