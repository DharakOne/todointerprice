const  initialState ={
    userName:"noName" 
}

export  default  function UserReducer(state=initialState,action){
    switch (action.type) {
        case "SET_USER_NAME":
            return {...state,userName:action.payload.userName}    
        default:
            return state
    }
    
}