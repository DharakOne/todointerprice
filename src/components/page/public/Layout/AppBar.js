import React from "react"
import {AppBarContainer, LinkContainer,Link} from "./AppBarStyle"
import Styled from "styled-components"

const MAppBarContainer=Styled(AppBarContainer)`
    background: radial-gradient(50% 50% at 50% 50%, #717EF2 0%, #5E6EFF 100%);
`


const MLink=Styled(Link)`
    color:black;
`

export default function AppBar (){
    return (
        <MAppBarContainer>
            HolaMundo
            <LinkContainer>
            <MLink  to="/">Home</MLink>
            </LinkContainer>
        </MAppBarContainer>
    )
}