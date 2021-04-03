import React from "react"
import { Redirect } from "react-router-dom"

import Home from "../components/page/public/Home"
import SignIn from "../components/page/public/SignIn"
import PageExample from "../components/page/public/PageExample"
import Price from "../components/page/public/Price"
import SingUp from "../components/page/public/SignUp"
import UserHome from "../components/page/private/UserHome"



export default function configRoutes(user) {
    console.log("sdfdfdf")
    const privates=[
        {
        path:"/user",
        component : user ? <UserHome/>: <Redirect to="/"/> }
    ]
    const publics = [
        {
            path: "/SingIn",
            component: user ? <Redirect to="/user" /> : <SignIn />,
        },
        {
            path: "/SingUp",
            component: <SingUp />,
        },
        {
            path: "/PageExample/:id",
            component: <PageExample />
        },

        {
            path: "/Price",
            component: <Price />
        },
        {
            path: "/",
            component: user ?  <Redirect to="/user"/>  : <Home /> 
        }
    ]
    const routes = [
        ...privates,
        ...publics
    ];
    return routes
}



