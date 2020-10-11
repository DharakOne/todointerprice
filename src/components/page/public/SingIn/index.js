import React from "react"
import Styled from "styled-components"

import Layout from "../Layout/index"
import Container from "../../../utils/Container"

const ContainerSingIn = Styled(Container)`
    background: radial-gradient(54.05% 102.79% at 50% 50%, #9256DB 0%, #3A5CB4 100%);
`


const ContainerForm = Styled.div`
    border-radius: 34px;
    width: 656px;
    height: 680px;
    background: #FBFBFB;
    margin: 109px auto 110px auto;
`

const Form = Styled.form`
    margin-left: 91px ;
   
`

const TitleForm = Styled.div`
    margin-top: 40px ;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
`

export default function SingIn() {
    return (
        <Layout>
            <ContainerSingIn>
                <ContainerForm>
                    <Form>
                        <TitleForm>
                            Registration Form
                </TitleForm>
                    </Form>
                </ContainerForm>

            </ContainerSingIn>
        </Layout>
    )
}