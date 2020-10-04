import React from "react"
import Styled from "styled-components"

import {
    AppBarContainer,
    LinkContainer,
    BrandConteiner,
    LinkBrand,
    Link
} from "../Layout/AppBarStyle"

import Container from "../../../utils/Container"
import IconStyle from "../../../utils/IconStyle"
import Logo from "./Logo.svg"



export default function Appbar() {
    return (
        <AppBarContainer>
            <BrandConteiner>
                <Logo />
                <LinkBrand to="/">TODO</LinkBrand>
            </BrandConteiner>
            <LinkContainer >
                <Link to="/SingUp" >Sing Up</Link>
                <Link to="/About" >About</Link>
            </LinkContainer>
        </AppBarContainer>
    )
}