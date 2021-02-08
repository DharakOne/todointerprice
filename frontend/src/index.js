import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"


import "react-datepicker/dist/react-datepicker.css"
import StoreApp from "./redux/StoreApp"
import App from "./App"

axios.defaults.baseURL = 'http://127.0.0.1:3000/';
//axios.defaults.baseURL = "https://3000-a8fdd359-8631-4bc6-88ab-a414bc9b7346.ws-us03.gitpod.io/"

axios.interceptors.request.use(request => {
    const origin  = request.url;
    const token = localStorage.getItem('token');
    if (origin[0]=="t") {
        request.headers.authorization = `Bearer ${token}`;
    }
    return request;
},
    error => {
        return Promise.reject(error);
    }
)



ReactDOM.render(
    <BrowserRouter>
        <Provider store={StoreApp}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

//npm start -- --public "$(gp url 3000 | sed 's+https://++'):443"
//npm start -- --public $(gp url 3000 | sed 's+https://++'):443
