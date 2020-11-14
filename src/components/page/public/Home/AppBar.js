import React from "react"
import Styled from "styled-components"

import {
    AppBarContainer,
    LinkContainer,
    Link
} from "./AppBarStyle"
import Brand from "../Layout/Brand"

import Container from "../../../utils/Container"
import IconStyle from "../../../utils/IconStyle"



export default function Appbar() {
    return (
        <AppBarContainer>
            <Brand/>
            <LinkContainer >
                <Link to="/SingUp" >Sing Up</Link>
                <Link to="/PageExample/About" >About</Link>
            </LinkContainer>
        </AppBarContainer>
    )
}