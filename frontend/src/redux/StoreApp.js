import {createStore,combineReducers} from "redux"
import UserReducer from "./user/reducer"

 const StoreApp= createStore(combineReducers({
    user:UserReducer
}))


export default  StoreApp