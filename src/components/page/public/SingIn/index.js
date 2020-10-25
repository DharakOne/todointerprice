import React, { useState } from "react"
import Styled from "styled-components"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css";



import Layout from "../Layout/index"
import Container from "../../../utils/Container"

const ContainerSingIn = Styled(Container)`
    background: radial-gradient(54.05% 102.79% at 50% 50%, #9256DB 0%, #3A5CB4 100%);
    

`

const FormE=Styled.form`

`

const ContainerForm = Styled.div`
    border-radius: 34px;
    width: 656px;
    height: 680px;
    background: #FBFBFB;
    margin: 69px auto 69px auto;

    @media (max-width: 730px) {
        height: auto;
        width: 90vw;
        padding-bottom: 35px;

    }
`

const Form = Styled.div`
    margin-left: 71px ;
    margin-right:71px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 56px;
    row-gap: 18px;
    @media (max-width: 730px) {
        grid-template-columns:1fr; 

    }
    @media (max-width: 404px) {
        margin-left: 20px;
        margin-right:20px;
    }

           
`
const ContainerInput = Styled.div`
    grid-column:${props => props.gColumn ? props.gColumn : "auto"};
   
`
const Input = Styled.input`
    type: ${(props)=>props.type ? props.type:"text"};

    width:100%;
    background: #EFEFEF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.25);
    height: 40px;
`
const InputPassword=Styled.input.attrs({
    type:"password",
    autocomplete:"new-password"
})`
    width:100%;
    background: #EFEFEF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.25);
    height: 40px;
`

const InputSelect = Styled.input.attrs({
    type: 'radio',
})`
    margin:${(props) => { props.margin ? props.margin : "0" }};

`

const InputName = Styled.div`
    margin-bottom: 13px;
    font-family: Roboto;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    font-style: normal;
`

const TitleForm = Styled.div`
    margin-left: 91px ;
    margin-top: 40px ;
    margin-bottom: 43px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
    
    @media (max-width: 404px) {
        margin-left:auto;
        margin-right:auto;
        width:max-content;
    }

`

const ButtomSubmit = Styled.div` 
    width: 163px;
    height: 39px;
    margin-top:46px;
    background: #5988FF;
    border-radius: 7px;
    margin-left: 70px ;
    display:flex;
    align-items:center;
    justify-content: center;
`

const LabelButtom = Styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`

const InputLabel = Styled.label`
`

export default function SingIn() {
    const [startDate, setStartDate] = useState(new Date());
    const [formData, formDataSet] = useState({
        firstName: "",
        lastName: "",
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
            <FormE>
            <ContainerSingIn>
                <ContainerForm>
                    <TitleForm>
                        Registration Form
                    </TitleForm>
                    <Form>

                        <ContainerInput>
                            <InputName >
                                First Name
                            </InputName>
                            <Input name="firstName" onChange={catchChange} value={formData.firstName} ></Input>
                        </ContainerInput>

                        <ContainerInput>
                            <InputName>
                                Last Name
                            </InputName>
                            <Input name="lastName" onChange={catchChange} value={formData.lastName} ></Input>
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

                    </Form>
                    <ButtomSubmit onClick={createNewUSer} > <LabelButtom>Submit</LabelButtom></ButtomSubmit>
                </ContainerForm>

            </ContainerSingIn>
            </FormE>
        </Layout>
    )
}