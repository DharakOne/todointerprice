import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import axios from "axios"
import { setUser } from "../../../../redux/user/action"
import useApi from "../../../utils/apiHook"


import Layout from "../Layout/index"
import {
    Form,
    Title,
    ContainerSingIn,
    ContentForm,
    InputPassword,
    Input,
    InputLabel,
    InputContainer,
    ButtomSumit,
    BlockErrorContainer
} from "./SignInStyle"


function BlockError(props) {
    if(!props.isError){
        return null
    }
    return (
        <BlockErrorContainer>
            {props.errorMensage}
        </BlockErrorContainer>)
}

function SignIn(props) {
    const [formData, formDataSet] = useState({
        email: "",
        password: "",
    })
    const history = useHistory();
    const { waitAnswer, handeldEvent,errorRequest } = useApi(1000)

    function catchChange(event) {
        const data = event.target
        formDataSet({ ...formData, [data.name]: data.value })
    }


    async function SignInHandeld(e) {
        if (!(e.keyCode == 13 || e.target.title == "submit") || waitAnswer) {
            return
        }


        try {
            const { data } = await handeldEvent({ url: "user/signIn", method: "post", config: { data: formData } })
            const { userName, token, email } = data

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
            <ContainerSingIn>
                <Form >
                    <Title>Sign In</Title>
                    <ContentForm>
                        <InputContainer>
                            <InputLabel>  Email  </InputLabel>
                            <Input onKeyUp={SignInHandeld} onChange={catchChange} name="email" value={formData.email} />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>  Password  </InputLabel>
                            <InputPassword onKeyUp={SignInHandeld} onChange={catchChange} name="password" value={formData.password} />
                            <ButtomSumit waitAnswer={waitAnswer} onClick={SignInHandeld} title="submit"  >Login</ButtomSumit>
                        </InputContainer>
                        <BlockError errorMensage="Please enter a password and email correct." isError={errorRequest}/>
                    </ContentForm>
                </Form>
            </ContainerSingIn>
        </Layout>
    )
}


const mapDispatchToProps = {
    setUser
}

export default connect(null, mapDispatchToProps)(SignIn)