import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import {connect} from "react-redux"
import axios from "axios"
import {setUser} from "../../../../redux/user/action"

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

function SignIn(props) {
    const [formData, formDataSet] = useState({
        email: "",
        password: "",
    })
    const history = useHistory();
    const [waitAnswer, setWaitAnswer] = useState(false)
    const [errorLogin, setErrorLogin] = useState(false)
    function catchChange(event) {
        const data = event.target
        formDataSet({ ...formData, [data.name]: data.value })
    }


    async function SignInHandeld(e) {
        if (e.key == "Enter" || e == "submit" && !waitAnswer) {
            setWaitAnswer(true)
            setErrorLogin(false)
            try {
                const { data } = await axios.post("p/signin", formData)
                localStorage.setItem("token", data.token)
                await new Promise(r => setTimeout(r, 2000));
                props.setUser()
                history.push("/user")
            } catch (error) {
                console.log("A error acurred")
                await new Promise(r => setTimeout(r, 2000));
                setErrorLogin(true)
                setWaitAnswer(false)
            }

        }

    }

    function BlockError() {
        if (errorLogin) {
            return (
                <BlockErrorContainer>
                    Please enter a password or email correct.
                </BlockErrorContainer>
            )
        }
        return null
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
                            <BlockError />
                            <ButtomSumit onClick={() => SignInHandeld("submit")}  >Login</ButtomSumit>
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