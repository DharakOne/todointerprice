import * as type from "./typeActions"


const initialState = {
    userName: null,
    email: null,
    loadUser:false
}

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case type.SET_USER:
            const { userName, email,loadUser } = action.payload
            return { ...state, userName, email,loadUser }
        case type.LOG_OUT:
            return initialState
        default:
            return state
    }
}