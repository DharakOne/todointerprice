import React from "react"
import Styled from "styled-components"

import image from "../../../../assets/image.png"


const TestimonialContainer = Styled.div`
    flex-basis:100%;
    float:left;
    width:100% ;
    flex-shrink:0;
    display:grid;
    grid-template-columns: auto auto;
   
` 

const TestimonyParagraphContainer = Styled.div`
    background:  ${props=>props.background ? props.background : "#EEEEEE"};
    margin:0 10px;
    border-radius: 30px;
    max-width: 812px;
    padding:21px 41px;
    @media (max-width: 582px) {
    grid-row:2;
    grid-column:1/3;
    @media (max-width: 440px) {
        padding:21px 11px;
    }

}
`

const TestimonyParagraph = Styled.label`
    font-family: Roboto;
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #626262;
`

const UserContainer = Styled.div`
    width: 166px;
    height: 196px;
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-right:39px;
    @media (max-width: 1007px) {
        grid-column: 1/3;
        grid-row:1;
        justify-self:center;
        margin-right:0;
    }
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



export default function TestimonialUser(props) {
    return (

        <TestimonialContainer>
            <UserContainer>
                <FotoContainer>
                    <img src={image} alt="assd"></img>
                </FotoContainer>
                <UserName>{props.name}</UserName>
                <UserJob>Manager IBMM</UserJob>
            </UserContainer>
            <TestimonyParagraphContainer background={props.background}>
                <TestimonyParagraph>
                    “Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed eiusmod
                    temporincidunt ut labore et dolore magna aliqua.Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
                    ea commodi consequat. Quis aute iure reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.”
                </TestimonyParagraph>
            </TestimonyParagraphContainer>
        </TestimonialContainer>

    )
}