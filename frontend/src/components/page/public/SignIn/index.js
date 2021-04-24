import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import {connect} from "react-redux"
import axios from "axios"
import {setUser} from "../../../../redux/user/action"
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
} from "./SignInStyle"

function SignIn(props) {
    const [formData, formDataSet] = useState({
        email: "",
        password: "",
    })
    const history = useHistory();
    const [answer, waitAnswer, errorRequest, handeldEvent] = useApi(1000)

    function catchChange(event) {
        const data = event.target
        formDataSet({ ...formData, [data.name]: data.value })
    }


    async function SignInHandeld() {
            try {
                let {data} = await handeldEvent("user/signIn", "post", {data:formData})
                localStorage.setItem("token", data.token) 
                console.log(data)
            } catch (error) {
            }
        }

    
    return (
        <Layout>
            <ContainerSingIn>
                <Form >
                    <Title>Sign In</Title>
                    <ContentForm>
                        <InputContainer>
                            <InputLabel  >Email</InputLabel>
                            <Input onKeyUp={SignInHandeld} onChange={catchChange} name="email" value={formData.email} />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel >Password</InputLabel>
                            <InputPassword onKeyUp={SignInHandeld} onChange={catchChange} name="password" value={formData.password} />
                            <ButtomSumit onClick={ SignInHandeld}  >Login</ButtomSumit>
                        </InputContainer>

                    </ContentForm>
                </Form>
            </ContainerSingIn>
        </Layout>
    )
}


const mapDispatchToProps={
    setUser
}

export default connect(null,mapDispatchToProps)(SignIn)