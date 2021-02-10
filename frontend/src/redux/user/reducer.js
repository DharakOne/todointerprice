import * as type from "./typeActions"


const initialState = {
    name: null,
    email: null
}

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case type.SET_USER:
            const { name, email } = action.payload
            return { ...state, name, email }
        case type.LOG_OUT:
            return initialState
        default:
            return state
    }
}