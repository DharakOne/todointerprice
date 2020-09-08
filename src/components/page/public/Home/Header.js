import React from "react"
import Styled from "styled-components"

import AppBar from "./AppBar"
import Container from "../../../utils/Container"


const HeaderContainer = Styled(Container)`
    background: radial-gradient(123.4% 307.78% at 103.02% 120.79%, #813CA2 8.22%, #5E6EFF 100%);
    height:668px;
`
const TitleIntroduction = Styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #FFFFFF;
    margin-top:151px;
    margin-left: 107px;
`
const Introduction = Styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    width:465px;
    color: #FFFFFF;
    font-family: Roboto;
    margin-left: 107px;
    margin-top:22px;
    margin-bottom:0px;
`
const IntroductionCompany = Styled.label`
    margin-top:14px;
    margin-left: 107px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #C4C4C4;
    font-style: normal;
`

const Brandcontainer = Styled.div`
    margin-top:18px;
    margin-left: 107px;
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
    margin-left: 107px;
    column-gap: 10px;
`

const LinkButton = Styled.a`
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
                <LinkButton href="/Price" background="#EC6D6D" color="white">Price</LinkButton>
                <LinkButton href="/SingIn" background="#E5E5E5" color="black">Sing In</LinkButton>
            </LinkConteiner>
        </HeaderContainer>
    )
}