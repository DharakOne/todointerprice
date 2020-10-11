import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Styled from "styled-components"

import { LinkContainer, LinkBrand, Link } from "./AppBarStyle"
import Brand from "./Brand"

import Container from "../../../utils/Container"

const AppBarContainer = Styled(Container)`
    flex-direction:row;
    width:96%;
    background: radial-gradient(50% 50% at 50% 50%, #717EF2 0%, #5E6EFF 100%);
    justify-content:space-between;
    align-items:center;
    height:80px;
    padding:0 2%;
`

const MLinkContainer = Styled(LinkContainer)`
    display:flex;
`

const MLink = Styled(Link)`
`

export default function AppBar() {
    const location = useLocation()
    const [links, setLinks] = useState([])

    useEffect(
        function () {
            const listlink = ["/SingUp", "Sing Up", "/Price", "Price", "/SingIn", "Sing In", "/About", "About"]
            const linksOn = []
            const idRemove = listlink.indexOf(location.pathname)
            const filterLink = listlink.filter(item =>( item !== listlink[idRemove]) && ( item !==listlink[idRemove+1]))
            console.log("My filter:",filterLink)

            for (let k = 0; k < 3; k++) {
                linksOn.push([filterLink[k * 2], filterLink[k * 2 + 1]])
            }
            console.log(linksOn)
            setLinks(linksOn)
        }
        , [location])

    return (
        <AppBarContainer>
            <Brand />
            <MLinkContainer>
                {
                    links.map((link) => <MLink key={link[0]} to={link[0]} > {link[1]} </MLink>)
                }

            </MLinkContainer>
        </AppBarContainer>
    )
}