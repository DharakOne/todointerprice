import {createStore,combineReducers} from "redux"
import UserReducer from "./user/UserReducer"

 const StoreApp= createStore(combineReducers({
    user:UserReducer
}))


export default  StoreApp