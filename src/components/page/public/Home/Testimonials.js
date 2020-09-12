import React from "react"
import Styled from "styled-components"

import ArrowLeft from "./Icons/ArrowLeft.svg"
import ArrowRight from "./Icons/ArrowRight.svg"

import Container from "../../../utils/Container"


const TestimonialsContainer = Styled(Container)`
    width: 1287px;
    margin:0 auto 109px;
    align-items:center;
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
    grid-template-columns:  auto auto auto;
    align-items: center;

`

const TestimonyParagraphContainer = Styled.div`
    background: #EEEEEE;
    border-radius: 30px;
    width: 812px;
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


const IconsStyle=Styled.div`
    margin:${props=>props.margin};
`

export default function Testimonials() {
    return (
        <TestimonialsContainer>
            <Title>JUST SOME OF THE TESTIMONIALS.</Title>
            <TestimonyContent>
                <IconsStyle margin="0 22px 0 0"> <ArrowLeft/></IconsStyle>
                <TestimonyParagraphContainer>
                    <TestimonyParagraph>
                        “Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed eiusmod
                        temporincidunt ut labore et dolore magna aliqua.Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
                        ea commodi consequat. Quis aute iure reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.”
                </TestimonyParagraph>
                </TestimonyParagraphContainer>
                <IconsStyle margin="0 0 0 22px"> <ArrowRight/></IconsStyle>
            </TestimonyContent>
        </TestimonialsContainer>
    )
}