import React, { useRef, useState,useRef } from "react"
import DatePicker from "react-datepicker"
import useApi from "../../../utils/apiHook"

import Layout from "../Layout/index"
import BlockError from "./BlockError"

import {
    FormC, Form,
    ContainerInput, Input, InputLabel, InputName,
    InputPassword, InputSelect, TitleForm, ButtomSubmit, LabelButtom, ContainerSingUp, ContainerForm
} from "./SingUpStyle"



export default function SignUp() {
    const [startDate, setStartDate] = useState( new Date());
    const Dataref = useRef({
        userName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        password: "",
        vPassword: ""
    })
    const {answer, waitAnswer, errorRequest, handeldEvent} = useApi(1000)
    
    function handle(event) {
        let data = event.target
        Dataref.current ={ ...Dataref.current, [data.name]: data.value }
    }

    async function createNewUser() {
        try {
                    let data = { ...formData, birthday: startDate }
                    await handeldEvent({url:"user/signUp", method:"post",config: { data }})
                    
        } catch (error) {
            console.log(`aa ${error}`)
        }

    }
    return (
        <Layout>
            <ContainerSingUp>
                <Form>
                    <TitleForm>
                        Registration Form
                    </TitleForm>
                    <ContainerForm>

                        <FormC>

                            <ContainerInput>
                                <InputName >
                                    User Name
                            </InputName>
                                <Input name="userName" onChange={catchChange} value={formData.userName} ></Input>
                            </ContainerInput>

                            <ContainerInput>
                                <InputName >
                                    Comapany Name
                            </InputName>
                                <Input name="companyName" onChange={catchChange} value={formData.companyName} ></Input>
                            </ContainerInput>

                            <ContainerInput>
                                <InputName>
                                    Email
                            </InputName>
                                <Input name="email" type="email" onChange={catchChange} value={formData.email} ></Input>
                            </ContainerInput>

                            <ContainerInput>
                                <InputName>
                                    Phone Number
                            </InputName>
                                <Input name="phoneNumber" onChange={catchChange} value={formData.phoneNumber} ></Input>
                            </ContainerInput>

                            <ContainerInput>
                                <InputName>
                                    Birthday
                            </InputName>
                                <DatePicker selected={startDate} onChange={datePicker => setStartDate(datePicker)} />
                            </ContainerInput>


                            <ContainerInput>
                                <InputName>
                                    Gender
                            </InputName>
                                <InputSelect name="gender" value="male" margin="0 4px 0 0" onChange={catchChange} checked={"male" === formData.gender} />
                                <InputLabel  >Male</InputLabel>
                                <InputSelect name="gender" value="female" margin="0 4px 0 20px" onChange={catchChange} checked={"female" === formData.gender}></InputSelect>
                                <InputLabel >Female</InputLabel>
                            </ContainerInput>

                            <ContainerInput>
                                <InputName >
                                    Password
                            </InputName>
                                <InputPassword name="password" type="password" autocomplete="new-password" onChange={catchChange} value={formData.password} ></InputPassword>
                            </ContainerInput>

                            <ContainerInput>
                                <InputName >
                                    Verify Password
                            </InputName>
                                <InputPassword name="vPassword" type="password" autocomplete="new-password" onChange={catchChange} value={formData.vPassword} ></InputPassword>
                            </ContainerInput>
                        </FormC>
                        <ButtomSubmit active={waitAnswer} onClick={createNewUser} > <LabelButtom>Submit</LabelButtom></ButtomSubmit>
                        <BlockError showError={errorRequest} answer={answer} />
                    </ContainerForm>
                </Form>
            </ContainerSingUp>
        </Layout>
    )
}