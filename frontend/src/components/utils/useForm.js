import { useRef } from "react"

export default function useForm(identifier="data-target-input"){
    const refForm = useRef()

    function getInputRef(){
        let formInputs = [...refForm.current.elements]
        formInputs = formInputs.filter(element => element.getAttribute(identifier))
        let dictionayInputs={}
        formInputs.map(input => dictionayInputs[input.name] = input)
        return dictionayInputs
    }

    function getDataRef(){
        let dictionayInputs=getInputRef()
        const valueInput = {}
        Object.keys(dictionayInputs).map(key=>valueInput[key]=dictionayInputs[key].value )
        return valueInput
    } 
    return {refForm,getDataRef,getInputRef}
}
