import React from "react"
import Styled from "styled-components"

import Container from "../../../utils/Container"
import IconStyle from "../../../utils/IconStyle"
import Logo from "./Logo.svg"

const AppBarContainer = Styled(Container)`
    margin-top:46px;
    margin-left:32px;
    margin-right:46px;
    width:auto;
    justify-content:space-between;
    flex-direction:row;
`


const LinkBrand = Styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #FFFFFF;
    text-decoration:none;

`
const LinkContainer = Styled.div`
    display:grid;
    column-gap: 25px;
    grid-template-columns: auto auto;
`
const BrandConteiner = Styled.div`
    display:grid;
    column-gap: 10px;
    grid-template-columns: auto auto;
`
const Link = Styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    text-decoration:none;
    padding-top:8px;
`



export default function Appbar () {
    return (
        <AppBarContainer>
                <BrandConteiner>
                    <Logo />
                    <LinkBrand href="/">TODO</LinkBrand>
                </BrandConteiner>
                <LinkContainer >
                    <Link href="/SingUp" >Sing Up</Link>
                    <Link href="/About" >About</Link>
                </LinkContainer>
        </AppBarContainer>
    )
}