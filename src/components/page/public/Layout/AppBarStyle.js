import React from "react"
import Styled from "styled-components"
import {Link as LinkRouter} from  "react-router-dom"


import Container from "../../../utils/Container"
 
export const AppBarContainer = Styled(Container)`
    margin-top:46px;
    margin-left:32px;
    margin-right:46px;
    width:auto;
    justify-content:space-between;
    flex-direction:row;
    @media (max-width: 440px) {
        display:grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        justify-content: center;
        row-gap: 10px;

    }
`


export const LinkBrand = Styled(LinkRouter)`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #FFFFFF;
    text-decoration:none;

`
export const LinkContainer = Styled.div`
    display:grid;
    column-gap: 25px;
    grid-template-columns: auto auto;
    
`
export const BrandConteiner = Styled.div`
    display:grid;
    column-gap: 10px;
    grid-template-columns: auto auto;
   

`
export const Link = Styled(LinkRouter)`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    text-decoration:none;
    padding-top:8px;
`