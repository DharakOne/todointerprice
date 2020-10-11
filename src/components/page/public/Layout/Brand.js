import React from "react"
import Styled from "styled-components"

import {BrandConteiner,LinkBrand} from "./AppBarStyle"

import Logo from "./Icons/Logo.svg"



export default function Brand() {
    return (
        <BrandConteiner>
            <Logo />
            <LinkBrand to="/">TODO</LinkBrand>
        </BrandConteiner>
    )
}