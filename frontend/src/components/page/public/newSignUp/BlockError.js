import React from "react"
import Styled from "styled-components"



const BlockErrorContainer = Styled.div`
    background:rgb(255, 143, 143);
    color:rgb(231, 34, 34);
    padding:3px;
    font-weight: bold;  
    margin-top:20px; 
`


export default function BlockError(props) {
    if (props.showError) {
        const {errors} = props.answer.data
        let firstError =""
        if( typeof(errors) =="string"){
            firstError =errors
        }
        else{
            firstError = Object.values(errors)[0][0]
        }
        return (
            <BlockErrorContainer>
                {firstError}
            </BlockErrorContainer>
        )
    }
    return null
}
