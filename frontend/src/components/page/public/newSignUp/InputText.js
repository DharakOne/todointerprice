import React from "react"

import {InputContainer, Input, InputLabel, } from "./Style"

export default function InputText ({ name, type = "text", labelName }) {
    return (
        <InputContainer>
            <InputLabel>{labelName}</InputLabel>
            {type == "text" ?
                <Input typeInput={type} name={name} data-target-input={true} /> :
                <Input typeInput={type} name={name} autoComplete="off" data-target-input={true} />}
        </InputContainer>
    )
}