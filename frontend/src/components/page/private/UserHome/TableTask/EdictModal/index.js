import React, { useState, useRef,useEffect } from "react"
import { createPortal } from "react-dom"
import { useDispatch } from "react-redux"

import { getFilterTasks } from "../../../../../../redux/task/action"

import {
    ContainerModal, TaskContainer, MarginContainer,
    Title, InputTittle, ContainterInput, InputText,
    InputArea, ContainerInputSelection, DoneInput, DateInput, ContainerButtoms, Buttom
} from "./Style"

import BlockError from "../../../../../utils/BlockError"
import useApi from "../../../../../utils/apiHook" 

const initialState = { name: "", description: "", assigned: "", company: "", done: false }


export default function EdictTask({ eventClose,data }) {
    const dispatch= useDispatch()
    const [state, setState] = useState(initialState)
    const dateRef = useRef(HTMLInputElement)
    const { waitAnswer, handeldEvent, errorRequest, setErrorRequest } = useApi(0)

    useEffect(()=>{
        let { company, assigned, name, endDate, description, done, _id }=data
        setState({ company, assigned, name, description, done, _id})
        endDate=endDate.replaceAll("/","-").replace(" ","T")
        console.log(endDate)
        endDate=endDate.slice(6,10)+endDate.slice(2,6)+endDate.slice(0,2)+endDate.slice(10,16)
        console.log(endDate)
        dateRef.current.value=endDate

    },[])

    function catchChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;


        setState({ ...state, [name]: value })
    }

    function handleCancel() {
        if (waitAnswer) {
            return
        }
        eventClose()
        setErrorRequest(false)
    }

    async function handleSubmint(e) {
        if (!(e.keyCode == 13 || e.target.title == "submit") || waitAnswer) {
            return
        }
        function relay(){
            dispatch(getFilterTasks({numberActivate:1,filter:{name:""}}))
        }
        try {
            let myrefDateValue = dateRef.current.value
            let EndDate = Date.parse(myrefDateValue)
            EndDate = new Date(EndDate)
            EndDate = EndDate.toISOString()
            const dataForm = { ...state, endDate: EndDate }
            console.log(dataForm)
            await handeldEvent({ url: "task/updateTask", method: "post", config: { data: dataForm }})
            relay()
            handleCancel()
        } catch (error) {
            setErrorRequest(true)
        }
    }

    return createPortal(
        <ContainerModal>
            <form >
                <TaskContainer>
                    <MarginContainer>
                        <Title>Portal Prueba</Title>
                        
                        <ContainterInput>
                            <InputTittle>Name</InputTittle>
                            <InputText onKeyUp={handleSubmint} value={state.name} onChange={catchChange} name="name" placeholder="Task Title" />
                        </ContainterInput>

                        <ContainterInput>
                            <InputTittle>Description</InputTittle>
                            <InputArea onKeyUp={handleSubmint} value={state.description} onChange={catchChange} name="description" />
                        </ContainterInput>

                        <ContainterInput>
                            <InputTittle>Assigned</InputTittle>
                            <InputText onKeyUp={handleSubmint} value={state.assigned} onChange={catchChange} name="assigned" placeholder="assigned name" />
                        </ContainterInput>

                        <ContainterInput>
                            <InputTittle>Company</InputTittle>
                            <InputText onKeyUp={handleSubmint} value={state.company} onChange={catchChange} name="company" placeholder="company name" />
                        </ContainterInput>
                        <ContainerInputSelection>
                            <InputTittle  >Done</InputTittle>
                            <InputTittle name="endDate" >End Date</InputTittle>
                            <DoneInput checked={state.done} onChange={catchChange} name="done" />
                            <DateInput ref={dateRef} />
                        </ContainerInputSelection>

                        <ContainerButtoms>
                            <Buttom onClick={handleCancel} background="rgba(255, 79, 79, 1)" >
                                cancel
                            </Buttom>
                            <Buttom onClick={handleSubmint} background={waitAnswer ? "rgb(38,73,169)" : "rgba(89, 136, 255, 1)"} title="submit" >
                                update
                            </Buttom>
                        </ContainerButtoms>

                        <BlockError errorMensage="Please enter a valid task." isError={errorRequest} />

                    </MarginContainer>
                </TaskContainer>
            </form>
        </ContainerModal>
        ,
        document.getElementById("portal")
    )
}