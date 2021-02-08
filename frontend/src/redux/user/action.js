import * as type from "./typeActions"

export function setUser({name,email}){
    return {
        type:type.SET_USER,
        payload:{
            name,
            email
        }
    }
}