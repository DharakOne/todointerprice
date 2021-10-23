import React, { useEffect } from "react"
import { Switch } from "react-router-dom"
import { connect } from "react-redux"
import AppContainer from "./components/utils/Container"
import configRoutes from "./config/routes"
import RoutersComponets from "./components/utils/RoutersComponets"
import { setUser } from "./redux/user/action"
import useApi from "./components/utils/apiHook"


function App(props) {
    const { handeldEvent: getUserapi } = useApi(0)

    useEffect(() => {
        async function getUser() {
            if (props.user.loadUser) {
                return
            }
            try {
                const { data } = await getUserapi({ url: "user/getUser", timeout: 0 })


                const { userName, email } = data
                if (!(props.user.userName == userName && props.userName.email == email)) {
                    props.setUser(
                        {
                            userName: data.userName,
                            email: data.email
                        })
                }


            } catch (error) {
                if (!props.user.loadUser) {
                    props.setUser(
                        { userName: null, email: null })
                }

            }

        }
        getUser()
    }, [props.user])

    const MainSwitch = () => (
        <Switch>
            {configRoutes(props.user.userName).map((route, i) => {

                return (
                    <RoutersComponets key={i} {...route} />
                )
            })}
        </Switch>)

    const LoadPage = () => <div></div>

    const ShowPage = props.user.loadUser ? MainSwitch : LoadPage


    return (
        <AppContainer>
            <ShowPage />
        </AppContainer>
    )
};

const mapStateToProps = (state) => ({
    user: state.user

})

const mapDispatchToProps = { setUser }


export default connect(mapStateToProps, mapDispatchToProps)(App)