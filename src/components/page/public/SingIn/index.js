import React, { useState } from "react"

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
    const [startDate, setStartDate] = useState(new Date());
    const [formData, formDataSet] = useState({
        email: "",
        password: "",
    })
    function catchChange(event) {

        const data = event.target

        formDataSet({ ...formData, [data.name]: data.value })

    }

    function signUser() {
        console.log("Usuario nuevo creado")
        console.log(formData)
        console.log(startDate)
    }
    return (
        <Layout>
            <ContainerSingIn>
                <Form>
                    <Title>Sing In</Title>
                    <ContentForm>
                        <InputContainer>
                            <InputLabel>Email</InputLabel>
                            <Input />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Password</InputLabel>
                            <InputPassword />
                        </InputContainer>
                        <ButtomSumit>
                                Login
                        </ButtomSumit>
                    </ContentForm>
                </Form>
            </ContainerSingIn>
        </Layout>
    )
}