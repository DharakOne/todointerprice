import React from "react"
import Layout from "../Layout/index"
import { connect } from "react-redux"
import { Background, ContainerSignUp, HeadContainer, HeadTitle, ButtomSubmit, FomrContainer } from "../newSignUp/Style"
import InputText from "../newSignUp/InputText"
import useStructureForm from "../newSignUp/useStructureForm"
import useApi from "../../../utils/apiHook"
import { setUser } from "../../../../redux/user/action"
import BlockError from "../../../utils/BlockError"



function SignIn(props) {
    const { refForm, getDataRef } = useStructureForm()
    const { waitAnswer, handeldEvent, errorRequest } = useApi(1000)
    async function formHandeld(event) {

        if(waitAnswer){
            return
        }
        event.preventDefault()
        const data = getDataRef()

        try {
            const  dataRequest = await (await handeldEvent({ url: "user/signIn", method: "post", config: { data } })).data
            const { userName, token, email } = dataRequest
            localStorage.setItem("token", token)
            props.setUser({ userName, email })
            history.push("/")

        } catch (error) {
            console.log("Hubo un error")
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

                    <ButtomSubmit waitAnswer={waitAnswer} type="submit" onClick={formHandeld}>Sign In</ButtomSubmit>
                    <BlockError isError={errorRequest} errorMensage={"There are a error with your password or email."}/>
                </ContainerSignUp>

            </Background>

        </Layout>
    )
}


const mapDispatchToProps = {
    setUser
}

export default connect(null, mapDispatchToProps)(SignIn)
