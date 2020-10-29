import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Styled from "styled-components"

import { LinkContainer, LinkBrand, Link, AppBarContainer } from "./AppBarStyle"
import Brand from "./Brand"

import Container from "../../../utils/Container"



export default function AppBar() {
    const location = useLocation()
    const [links, setLinks] = useState([])

    useEffect(
        function () {
            const listlink = ["/SingUp", "Sing Up", "/Price", "Price", "/SingIn", "Sing In", "/PageExample/About", "About"]
            const linksOn = []
            const pathname = location.pathname
            const idRemove = listlink.indexOf(pathname)
            let filterLink
            if (idRemove != -1) {
                filterLink = listlink.filter(item => (item !== listlink[idRemove]) && (item !== listlink[idRemove + 1]))
            } else {
                filterLink = listlink
            }
            for (let k = 0; k < filterLink.length / 2; k++) {
                linksOn.push([filterLink[k * 2], filterLink[k * 2 + 1]])
            }
            setLinks(linksOn)
        }
        , [location])

    return (
        <AppBarContainer>
            <Brand />
            <LinkContainer>
                {
                    links.map((link) => <Link key={link[0]} to={
                        {
                            pathname:link[0],
                        }
                    } > {link[1]} </Link>)
                }

            </LinkContainer>
        </AppBarContainer >
    )
}