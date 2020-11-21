import React  from "react"
import Styled from "styled-components"
import { Switch, Route } from "react-router-dom"


import AppContainer from "./components/utils/Container"
import Home from "./components/page/public/Home"
import SingIn from "./components/page/public/SingIn"
import PageExample from "./components/page/public/PageExample"
import SingUp from "./components/page/public/SingUp"
import Price from "./components/page/public/Price"




export default function App() {

    return (
        <AppContainer>
            <Switch>
                <Route path="/SingIn">
                    <SingIn/>
                </Route>
                <Route path="/SingUp">
                    <SingUp/>
                </Route>
                <Route path="/Price">
                    <Price/>
                </Route>
                <Route path="/PageExample/:id"> 
                    <PageExample/>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </AppContainer>
    )
};