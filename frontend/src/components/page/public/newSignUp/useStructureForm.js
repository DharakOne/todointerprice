import React, { useRef } from "react"


export default function useStructureForm(){
    const refForm = useRef()

    function getDataRef(){
        let formInputs = [...refForm.current.elements]
        const valueInput = {}
        console.log(formInputs[0].getAttribute("data-target-input"))
        formInputs = formInputs.filter(element => element.getAttribute("data-target-input"))

        formInputs.map(input => valueInput[input.name] = input.value)
        return valueInput
    } 
    return {refForm,getDataRef}
}