import React from "react"
import Styled from "styled-components"


export const BlockErrorContainer = Styled.div`
    background:rgb(255, 143, 143);
    color:rgb(231, 34, 34);
    padding:3px;
    font-weight: bold;
    border-radius:4px;
`

export default function BlockError(props) {
    if(!props.isError){
        return null
    }
    return (
        <BlockErrorContainer>
            {props.errorMensage}
        </BlockErrorContainer>)
}

