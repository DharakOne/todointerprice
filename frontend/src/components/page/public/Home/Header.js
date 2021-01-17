import React from "react"
import Styled from "styled-components"
import {Link as LinkRoute} from "react-router-dom"

import AppBar from "./AppBar"
import Container from "../../../utils/Container"


const HeaderContainer = Styled(Container)`
    background: radial-gradient(123.4% 307.78% at 103.02% 120.79%, #813CA2 8.22%, #5E6EFF 100%);
    height:668px;
    @media (max-width: 1015px) {
        height:auto;
    }
`
const ContainerMain = Styled(Container)`
    display:grid;
    grid-template-columns:auto auto;
    @media (max-width: 1015px) {
        grid-template-columns:auto;
        height:auto;
        row-gap: 25px;
        margin-bottom:30px;
    }
`

const ContainerLeft = Styled(Container)`
    margin-left: 107px;
    @media (max-width: 1050px) {
        margin-left:55px;
    }

    @media (max-width: 1015px) {
        width:auto;
        margin-left:0;
        justify-self: center;
    }
    @media (max-width: 1015px) {
        width:80%;
    }
`
const ContainerRight = Styled.div`
    background:white;
    margin-top:20px;
    width:450px;
    height:480px;
    @media (max-width: 1015px) {
        justify-self:center;
    }
    @media (max-width: 520px) {
        width: 85%;
        margin: 0 auto;
    }

`

const TitleIntroduction = Styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #FFFFFF;
    margin-top:151px;
     @media (max-width: 1015px) {
        margin-top:50px;

    }

`
const Introduction = Styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    width:465px;
    color: #FFFFFF;
    font-family: Roboto;
    margin-top:22px;
    margin-bottom:0px;
    @media (max-width: 520px) {
        width:90%;
    }
`   
const IntroductionCompany = Styled.label`
    margin-top:14px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #C4C4C4;
    font-style: normal;
`

const Brandcontainer = Styled.div`
    margin-top:18px;
`

const Brand = Styled.label`
    font-family: Revalia;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    font-style: normal;
    margin:0 5px;
`
const LinkConteiner = Styled.div`
    display:grid;
    grid-template-columns: min-content min-content;
    margin-top:18px;
    column-gap: 10px;
    @media (max-width: 490px) {
        grid-template-columns:auto;
        row-gap: 15px;
    }
`

const LinkButton = Styled(LinkRoute)`
    font-family: Roboto;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    font-style: normal;

    width: 196px;
    background:${props => props.background};
    color:${props => props.color};
    border-radius: 10px;
    text-align:center;
    height:auto;
    padding: 10.5px 0;
    text-decoration: none;
`




export default function Header() {
    return (
        <HeaderContainer>
            <AppBar />
            <ContainerMain>
                <ContainerLeft>
                    <TitleIntroduction>Grow up with as.</TitleIntroduction>
                    <Introduction>
                        Our system TODO can help you to organize
                        your projets. We like help other company to
                        achieve their goal
            </Introduction>
                    <IntroductionCompany>
                        Thousand company work with as and are satisfied
            </IntroductionCompany>
                    <Brandcontainer>
                        <Brand>IBMM</Brand>
                        <Brand>MicrosoftTeam</Brand>
                        <Brand>Amazons</Brand>
                    </Brandcontainer>
                    <LinkConteiner>
                        <LinkButton to="/Price" background="#EC6D6D" color="white">Price</LinkButton>
                        <LinkButton to="/SingIn" background="#E5E5E5" color="black">Sing In</LinkButton>
                    </LinkConteiner>
                </ContainerLeft>
                <ContainerRight></ContainerRight>
            </ContainerMain>
        </HeaderContainer>
    )
}