import React, { useEffect } from "react"
import { Switch } from "react-router-dom"
import { connect } from "react-redux"
import axios from "axios"
import AppContainer from "./components/utils/Container"
import configRoutes from "./config/routes"
import RoutersComponets from "./components/utils/RoutersComponets"
import { setUser } from "./redux/user/action"


function App(props) {
    useEffect(() => {
        async function getUser() {
                const  data1 = await (await axios.get("")).data
                console.log(data1)
            try {
                const { data } = await axios.get("user")

                props.setUser(
                    {
                        name: data.username,
                        email: data.email
                    })


            } catch (error) {
                console.log("user is not aunteticated")
            }

        }
        getUser()
    }, [])
    useEffect(()=>{
        console.log("asa")
        
    },[props.user])
    return (
        <AppContainer>
            <Switch>
                {configRoutes(props.user.name).map((route, i) => {
                    
                    return (
                        <RoutersComponets key={i} {...route} />
                    )
                })}
            </Switch>
        </AppContainer>
    )
};

const mapStateToProps = (state) => ({
    user: state.user

})

const mapDispatchToProps = { setUser }


export default connect(mapStateToProps, mapDispatchToProps)(App)