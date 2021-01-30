import React, { useState } from "react"
import axios from "axios"

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
    ButtomSumit
} from "./SingInStyle"

export default function SingIn() {
    const [formData, formDataSet] = useState({
        email: "",
        password: "",
    })
    function catchChange(event) {
        
        const data = event.target
        formDataSet({ ...formData, [data.name]: data.value })

    }

    async function SignInUser() {
        try {
            console.log("rn accion")
            const {data} = await axios.post("p/signin",formData)
            localStorage.setItem(data)
        } catch (error) {
            console.log("A error acurred")
            console.log(error)
        }
    }
    return (
        <Layout>
            <ContainerSingIn>
                <Form>
                    <Title>Sing In</Title>
                    <ContentForm>
                        <InputContainer>
                            <InputLabel >Email</InputLabel>
                            <Input onChange={catchChange}  name="email" value={formData.email}/>
                        </InputContainer>
                        <InputContainer>
                            <InputLabel >Password</InputLabel>
                            <InputPassword onChange={catchChange}  name="password" value={formData.password} />
                        </InputContainer>
                        <ButtomSumit onClick={()=>{SignInUser()}}>
                            Login
                        </ButtomSumit>
                    </ContentForm>
                </Form>
            </ContainerSingIn>
        </Layout>
    )
}