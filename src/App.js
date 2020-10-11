import React  from "react";
import Styled from "styled-components";
import { Switch, Route } from "react-router-dom"


import AppContainer from "./components/utils/Container";
import Home from "./components/page/public/Home"
import SingIn from "./components/page/public/SingIn"




export default function App() {

    return (
        <AppContainer>
            <Switch>
                <Route path="/SingIn">
                    <SingIn></SingIn>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </AppContainer>
    )
};