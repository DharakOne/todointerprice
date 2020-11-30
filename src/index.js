import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"


import "react-datepicker/dist/react-datepicker.css";

import StoreApp from "./redux/StoreApp"
import App from "./App";



ReactDOM.render(
    <BrowserRouter>
        <Provider store={StoreApp}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

//npm start -- --public "$(gp url 3000 | sed 's+https://++'):443"