import React  from "react";
import Styled from "styled-components";
import { Switch, Route } from "react-router-dom"


import AppContainer from "./components/utils/Container";
import Home from "./components/page/public/Home"
import SingIn from "./components/page/public/SingIn"
import PageExample from "./components/page/public/PageExample"
import Layout from "./components/page/public/Layout"
import SingUp from "./components/page/public/SingUp"




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
                <Route path="/PageExample/:id">
                    <Layout><PageExample/></Layout>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </AppContainer>
    )
};