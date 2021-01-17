import React from "react"
import Styled from "styled-components"
import {Link as LinkRouter} from "react-router-dom"

import Logo from "./Icons/Logo.svg"

const LinkBrand = Styled(LinkRouter)`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #FFFFFF;
    text-decoration:none;
`
export const BrandConteiner = Styled.div`
    display:grid;
    column-gap: 10px;
    grid-template-columns: auto auto;
`

export default function Brand() {
    return (
        <BrandConteiner>
            <Logo />
            <LinkBrand to="/">TODO</LinkBrand>
        </BrandConteiner>
    )
}