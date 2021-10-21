import React from "react"
import Styled from "styled-components"

import { InputContainer, InputLabel, } from "../../public/newSignUp/Style"


export const Input = Styled.input.attrs((props) => ({
    type: props.type
}))`
    background: none;
    width:max(359px,280px);
    border:none;
    border-bottom:1px solid rgb(121, 71, 182);
    &:focus{
        outline:none;
    }
    
`

export default function InputText(
    { name, type = "text", labelName, disabled = null }) {
    return (
        <InputContainer>
            <InputLabel> {labelName} </InputLabel>
            <Input
                type={type}
                name={name}
                data-target-input={true}
                disabled={disabled}
            />
        </InputContainer>
    )
}