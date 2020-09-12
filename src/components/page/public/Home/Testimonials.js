import React from "react"
import Styled from "styled-components"

import ArrowLeft from "./Icons/ArrowLeft.svg"
import ArrowRight from "./Icons/ArrowRight.svg"

import Container from "../../../utils/Container"
import Image from "../../../../assets/image.png"

const TestimonialsContainer = Styled(Container)`
    margin:0 20px 109px;
    align-items:center;
    width:auto;
`
const Title = Styled.label`
    font-family: Roboto;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #818181;
    font-style: normal;
    margin-bottom:41px;
`

const TestimonyContent = Styled.div`
    display:grid;
    grid-template-columns:  auto auto auto auto;
    align-items: center;

`

const TestimonyParagraphContainer = Styled.div`
    background: #EEEEEE;
    border-radius: 30px;
    max-width: 812px;
    padding:21px 41px;;
`

const TestimonyParagraph = Styled.label`
    font-family: Roboto;
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #626262;
`


const IconsStyle = Styled.div`
    margin:${props => props.margin};
`

const UserContainer = Styled.div`
    width: 166px;
    height: 196px;
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-right:39px;

`

const FotoContainer = Styled.div`
    background: #F4F4F4;
    width: 110px;
    height: 110px

    background: #EFEFEF;
    border-radius: 53px;
    text-align: center;
`

const UserName = Styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
`

const UserJob = Styled.label`
    font-family: Roboto;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    
    color: #9E9E9E;
    font-style: normal;
`

export default function Testimonials() {
    return (
        <TestimonialsContainer>
            <Title>JUST SOME OF THE TESTIMONIALS.</Title>
            <TestimonyContent>
                <IconsStyle margin="0 22px 0 0"> <ArrowLeft /></IconsStyle>
                <UserContainer>
                    <FotoContainer>
                        <img src={Image} alt="assd"></img>
                    </FotoContainer>
                    <UserName>Junior Castro</UserName>
                    <UserJob>Manager IBMM</UserJob>
                </UserContainer>
                <TestimonyParagraphContainer>
                    <TestimonyParagraph>
                        “Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed eiusmod
                        temporincidunt ut labore et dolore magna aliqua.Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
                        ea commodi consequat. Quis aute iure reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.”
                </TestimonyParagraph>
                </TestimonyParagraphContainer>
                <IconsStyle margin="0 0 0 22px"> <ArrowRight /></IconsStyle>
            </TestimonyContent>
        </TestimonialsContainer>
    )
}