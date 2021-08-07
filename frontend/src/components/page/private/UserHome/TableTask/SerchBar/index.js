import React, { useState } from "react"
import IconLens from "./lens.svg"
import IconStyle from "../../../../../utils/IconStyle"
import Styled from "styled-components"

import { SearchBarInput, SearchBarContainer } from "./Style"

const LensIconStyle = Styled(IconStyle)`
    background: rgba(255, 168, 0, 1);
    width: 42px;
    height:42px;
    border-radius: 0px 7px 7px 0px;
    cursor:pointer;
`

export default function SearchBar({upDateFilterOut}) {
    const [name,setName]=useState("")
    function handleInput(event) {
        
        const {value}=event.target
        setName(value)
        upDateFilterOut({name:value})
    }

    return (
        <SearchBarContainer>
            <SearchBarInput onChange={handleInput} value={name}/>
            <LensIconStyle ><IconLens /></LensIconStyle>
        </SearchBarContainer>
    )
}