import React from "react"
import Layout from "../Layout/index"
import { connect } from "react-redux"



import { Background, ContainerSignUp, HeadContainer, HeadTitle, ButtomSubmit, FomrContainer } from "../newSignUp/Style"
import InputText from "../newSignUp/InputText"

import useStructureForm from "../newSignUp/useStructureForm"
import useApi from "../../../utils/apiHook"

import { setUser } from "../../../../redux/user/action"



function SignIn(props) {
    const { refForm, getDataRef } = useStructureForm()
    const { waitAnswer, handeldEvent, errorRequest } = useApi(1000)
    async function formHandeld(event) {

        event.preventDefault()

        console.log("n   jhbjhbjh")
        const data = getDataRef()
        console.log(data)
        try {
            const  dataRequest = await (await handeldEvent({ url: "user/signIn", method: "post", config: { data } })).data
            console.log(dataRequest)
            const { userName, token, email } = dataRequest
            localStorage.setItem("token", token)
            props.setUser({ userName, email })
            history.push("/")

        } catch (error) {
            console.log("Hubo un error")
            console.log(error)
        }
    }

    return (
        <Layout>
            <Background>
                <ContainerSignUp>
                    <HeadContainer>
                        <HeadTitle>
                            Sign Up
                        </HeadTitle>
                    </HeadContainer>
                    <form ref={refForm}
                        onSubmit={formHandeld}>
                    
                        <FomrContainer>
                            <InputText labelName="Email" name="email" />
                            <InputText labelName="Password" type="password" name="password" />
                            <input type="submit" value="Submit" style={{ display: "none" }} />
                        </FomrContainer>
                    </form>

                    <ButtomSubmit type="submit" onClick={formHandeld}>Sign In</ButtomSubmit>
                </ContainerSignUp>

            </Background>

        </Layout>
    )
}


const mapDispatchToProps = {
    setUser
}

export default connect(null, mapDispatchToProps)(SignIn)
