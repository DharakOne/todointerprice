import React,{useState} from "react"
import { createPortal } from "react-dom"

import {
    ContainerModal, TaskContainer, MarginContainer,
    Title, InputTittle, ContainterInput, InputText,
    InputArea,ContainerInputSelection,DoneInput,DateInput
} from "./Style"

export default function PageTask({ isOpen, eventClose }) {
    const [state,setState]=useState({name:"",description:"",assigned:"",company:"",done:false,endDate:new Date()})

    function catchChange(event) {
        const data = event.target
        setState({ ...state, [data.name]: data.value })
    }

    function handleSubmint(){
       console.log("asas") 
    }

    if (!isOpen) return null

    return createPortal(
        <ContainerModal>
            <TaskContainer>
                <MarginContainer>

                    <Title>Portal Prueba</Title>
                    <ContainterInput>
                        <InputTittle>Name</InputTittle>
                        <InputText value={state.name} onChange={catchChange} name="name" placeholder="Task Title" />
                    </ContainterInput>

                    <ContainterInput>
                        <InputTittle>Description</InputTittle>
                        <InputArea value={state.description} onChange={catchChange} name="description" />
                    </ContainterInput>

                    <ContainterInput>
                        <InputTittle>Assigned</InputTittle>
                        <InputText value={state.assigned} onChange={catchChange} name="assigned" placeholder="assigned name" />
                    </ContainterInput>

                    <ContainterInput>
                        <InputTittle>Company</InputTittle>
                        <InputText value={state.company} onChange={catchChange}  name="company" placeholder="company name" />
                    </ContainterInput>
                    <ContainerInputSelection>
                        <InputTittle value={state.done}  onChange={catchChange} name="done" >Done</InputTittle>
                        <InputTittle value={state.endDate} onChange={catchChange} name="endDate" >End Date</InputTittle>
                        <DoneInput/>
                        <DateInput/>
                    </ContainerInputSelection>
                    <button onClick={eventClose}> buttom</button>
                </MarginContainer>

            </TaskContainer>
        </ContainerModal> 
        ,
        document.getElementById("portal")
    )
}

