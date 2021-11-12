import { createStore, combineReducers,applyMiddleware,compose  } from "redux"
import ReduxThunk from 'redux-thunk'
import UserReducer from "./user/reducer"
import TaskReducer from "./task/reducer"

const middlewareEnhancer = applyMiddleware(ReduxThunk)
const reduxTool=  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composedEnhancers = compose(middlewareEnhancer, reduxTool)

const StoreApp = createStore(
    combineReducers({
        user: UserReducer,
        task: TaskReducer
    }),undefined,composedEnhancers)
     
export default StoreApp