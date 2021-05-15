import React from "react"
import Styled from "styled-components"
import {Link as LinkRouter} from  "react-router-dom"


import Container from "../../../utils/Container"
 
export const AppBarContainer = Styled(Container)`
    flex-direction:row;
    width:96%;
    background: radial-gradient(50% 50% at 50% 50%, #717EF2 0%, #5E6EFF 100%);
    justify-content:space-between;
    align-items:center;
    height:60px;
    padding:0 2%;
    @media (max-width: 560px) {
        flex-direction:column;
        height:auto;
        padding-bottom:20px;
        padding-top:15px;
    }
`

export const LinkContainer = Styled.div`
    display:flex;
    column-gap: 25px;
    grid-template-columns: auto auto;
    @media (max-width: 500px) {
        flex-direction:column;
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

export const LinkLogout=Styled(Link)`
    background-color:rgb(255, 120, 120);
    padding-top:0;
    padding:4px;
    margin-top:2px;
    border-radius:5px;
`