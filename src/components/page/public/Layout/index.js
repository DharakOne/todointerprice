import React from "react"
import Styled from "styled-components"

import LayoutContainer from "../../../utils/Container"
import AppBar from "./AppBar"



export default function (props) {
    return (
        <LayoutContainer direction="column" height="auto">
            <AppBar/>
            {props.children}
        </LayoutContainer>
    )
}