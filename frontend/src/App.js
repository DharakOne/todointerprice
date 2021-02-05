import React, { useEffect } from "react"
import { Switch, Route, Redirect} from "react-router-dom"
import { connect } from "react-redux"
import axios from "axios"


import AppContainer from "./components/utils/Container"
import Home from "./components/page/public/Home"
import SignIn from "./components/page/public/SignIn"
import PageExample from "./components/page/public/PageExample"
import SignUp from "./components/page/public/SignUp"
import Price from "./components/page/public/Price"
import Notes from "./components/page/private/Notes"





function App() {
    useEffect(function(){
        async  function fetchData() {
            try {
                const {data} = await axios.get("")

                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <AppContainer>
            <Switch>
                <Route path="/SingIn">
                    <SignIn />
                </Route>
                <Route path="/SingUp">
                    <SignUp />
                </Route>
                <Route path="/Price">
                    <Price />
                </Route>
                <Route path="/PageExample/:id">
                    <PageExample />
                </Route>
                <Route path="/Notes">
                    <Notes />
                </Route>
                <Redirect >
                    <Home />
                </Redirect>

            </Switch>
        </AppContainer>
    )
};

const mapStateToProps = (state) => ({
    user: state
})

export default connect(mapStateToProps)(App)