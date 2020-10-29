import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"

import "react-datepicker/dist/react-datepicker.css";


import App from "./App";



ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

//npm start -- --public "$(gp url 3000 | sed 's+https://++'):443"