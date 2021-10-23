import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import "react-datepicker/dist/react-datepicker.css"

import StoreApp from "./redux/StoreApp"
import {logOut} from "./redux/user/action"
import App from "./App"

axios.defaults.baseURL = 'https://3000-teal-spider-53thcne1.ws-us17.gitpod.io/';



axios.interceptors.request.use(request => {
    const token = localStorage.getItem('token');
    request.headers.authorization = `Bearer ${token}`;
    return request;
},
    error => {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(response=>{
    console.log(response)
    console.log("asdsd")
    return response
},error=>{
    console.log("funciona")
    let {data}=error.response
    console.log(Object.entries(data).sort().toString())
    if(Object.entries(data).sort().toString()==="msg,Token has expired"){
        alert("Your sessison has expired")
        StoreApp.dispatch(logOut())
    }
    console.log("eror response")
    return Promise.reject(error)

}
)



ReactDOM.render(
    <BrowserRouter>
        <Provider store={StoreApp}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

