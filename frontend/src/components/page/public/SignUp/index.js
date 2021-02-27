import React, { useState } from "react"
import DatePicker from "react-datepicker"

import Layout from "../Layout/index"
import {
        FormE,FormC,Form,ContainerForm,ContainerSingUp,
        ContainerInput,Input,InputLabel,InputName,
        InputPassword,InputSelect,TitleForm, ButtomSubmit,LabelButtom} from "./SingUpStyle"
 
export default function SingUp() {
    const [startDate, setStartDate] = useState(new Date());
    const [formData, formDataSet] = useState({
        username: "",
        name: "",
        email:"",
        phone:"",
        gender:"",
        password: "",
        vPassword: ""
    })
    function catchChange(event) {

        const data = event.target
       
            formDataSet({ ...formData, [data.name]: data.value })

    }

    function createNewUSer(){
        console.log("Usuario nuevo creado")
        console.log(formData)
        console.log(startDate)
    }
    return (
        <Layout>
            <ContainerSingUp>
                <Form>
                    <TitleForm>
                        Registration Form
                    </TitleForm>
                    <FormC>

                        <ContainerInput>
                            <InputName >
                                User Name
                            </InputName>
                            <Input name="username" onChange={catchChange} value={formData.firstName} ></Input>
                        </ContainerInput>

                        <ContainerInput>
                            <InputName>
                                Name
                            </InputName>
                            <Input name="name" onChange={catchChange} value={formData.lastName} ></Input>
                        </ContainerInput>

                        <ContainerInput>
                            <InputName>
                                Birthday
                            </InputName>
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                        </ContainerInput>


                        <ContainerInput>
                            <InputName>
                                Gender 
                            </InputName>
                            <InputSelect name="gender" value="male"  margin="0 4px 0 0" onChange={catchChange} checked={"male"===formData.gender} />
                            <InputLabel  >Male</InputLabel>
                            <InputSelect name="gender" value="female" margin="0 4px 0 20px" onChange={catchChange} checked={"female"===formData.gender}></InputSelect>
                            <InputLabel >Female</InputLabel>

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
                            <Input name="phone" type="number" onChange={catchChange} value={formData.phone} ></Input>
                        </ContainerInput> 

                        <ContainerInput>
                            <InputName >
                                Password
                            </InputName>
                            <InputPassword name="password" type="password"  autocomplete="new-password" onChange={catchChange} value={formData.password} ></InputPassword>
                        </ContainerInput>

                        <ContainerInput>
                            <InputName >
                                Verify Password
                            </InputName>
                            <InputPassword name="vPassword" type="password"  autocomplete="new-password"   onChange={catchChange} value={formData.vPassword} ></InputPassword>
                        </ContainerInput>

                    </FormC>
                    <ButtomSubmit onClick={createNewUSer} > <LabelButtom>Submit</LabelButtom></ButtomSubmit>
                </Form>

            </ContainerSingUp>
        </Layout>
    )
}