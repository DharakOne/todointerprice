import React, { useRef } from "react"

import Layout from "../Layout/index"
import BlockError from "../../../utils/BlockError"
import InputText from "./InputText"

import {
    Background, ContainerSignUp,
    HeadContainer, HeadTitle, HeadSubTitle,
    FomrContainer,
    TermCondContainer, TermCondURL, Terminput, ButtomSubmit
} from "./Style"

import useApi from "../../../utils/apiHook"
import  useStructureForm  from "./useStructureForm"



export default function SignUp() {
    const {refForm,getDataRef}=useStructureForm()
    const checkBoxRef = useRef()
    const {waitAnswer, errorRequest, handeldEvent } = useApi(1000)


    async function handleForm(event) {
        event.preventDefault()
        const isGoint = checkBoxRef.current.checked 
        if (isGoint==false){
            alert("Only people  who accepted the condition can sing up")
            return
        }
        if(waitAnswer){
            return
        }
        const data=getDataRef()

        try {
            await handeldEvent({ url: "user/signUp", method: "post", config: { data } })

        } catch (error) {
            console.log(` aa ${error.errors}`)
        }
    }

    return (
        <Layout>
            <Background>
                <ContainerSignUp>

                    <HeadContainer>
                        <HeadTitle>
                            Welcone to TODO
                        </HeadTitle>
                        <HeadSubTitle>
                            Come on and create an account
                        </HeadSubTitle>
                    </HeadContainer>

                    <form ref={refForm}
                        onSubmit={handleForm}>
                        <FomrContainer>
                            <InputText labelName="Email" labelName="Email" name="email" />
                            <InputText labelName="User Name" name="userName" />
                            <InputText labelName="Phone Number" name="phoneNumber" />
                            <InputText labelName="Password" type="password" name="password" />
                            <InputText labelName="Confirm Password" type="password" name="vPassword" />

                            {/* Invisible button to do the outsite submit button work */}
                            <input type="submit" value="Submit" style={{ display: "none" }} />
                        </FomrContainer>
                    </form>

                    <BlockError isError={errorRequest} errorMensage="There are a error with your datas"/>


                    <TermCondContainer>
                        <Terminput ref={checkBoxRef} />
                        I agrred with the website´s
                        <TermCondURL>
                            Term a conditions
                        </TermCondURL>
                    </TermCondContainer>
                    <ButtomSubmit waitAnswer={waitAnswer} type="submit" onClick={handleForm}>Sing Up</ButtomSubmit>
                </ContainerSignUp>
            </Background>
        </Layout>
    )
}
