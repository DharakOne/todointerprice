import React, { useCallback, useEffect, useState } from "react"
import { Background, BarTitle, Title, TaskContainer, Typography, ToolContainer, Input, ContainerTable, TaskDescriptionBackground, IconTask, TitleDescreption, ContainerDescription, ParagraphDescription, TaskContainerMain } from "./Style"

import ArrowRight from "./Icons/ArrowRight.svg"
import Pen from "./Icons/Pen.svg"
import Delete from "./Icons/Delete.svg"
import IconStyle from "../../../../utils/IconStyle"
import Styled from "styled-components"


import TeethTab from "./TeethTab"
import axios from "axios"



//Data of Example

function createData(number, Name = "Task First", MaxData = 40) {
    let Tasks = []

    for (let i = 0; i < number; i++) {
        Tasks.push({
            Name: Name, Company: "Canju Freeze", Assigned: "Junior Castro", EndDate: "Dec 30, 2020", Done: true,
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit sfdd"
        })
    }

    return Tasks
}


function TaskDescription({ open, Title, Description }) {

    function formTitle(string) {
        let formString = string.split(" ")
        if ((formString.length >= 1)) {
            return formString[0][0] + formString[1][0]
        }
        else {
            return formString[0][0] + formString[0][1]
        }
    }

    if (!open) {
        return null

    }

    return (
        <TaskDescriptionBackground>
            <IconTask>{
                formTitle(Title)
            }</IconTask>
            <ContainerDescription>
                <TitleDescreption>{formTitle(Title)}</TitleDescreption>
                <ParagraphDescription>
                    {Description}
                </ParagraphDescription>
            </ContainerDescription>
        </TaskDescriptionBackground>
    )
}

const IconRotate = Styled(IconStyle)`
    transform:${(props) => `rotate(${props.Rotate})`};
`

function TaskBar({ company, assigned, name, endDate, description }) {
    const [open, setOpen] = useState(false)

    return (
        <TaskContainerMain>
            <TaskContainer>
                <IconRotate Rotate={open ? "90deg" : "0deg"} onClick={() => { setOpen(!open) }}><ArrowRight /></IconRotate>
                <Typography weight color={"#5988FF"}> {name}</Typography>
                <Typography> {company}</Typography>
                <Typography> {assigned}</Typography>
                <Typography> {endDate}</Typography>
                <Input />
                <ToolContainer>
                    <IconStyle>
                        <Delete />
                    </IconStyle>
                    <IconStyle>
                        <Pen />
                    </IconStyle>
                </ToolContainer>
            </TaskContainer>
            <TaskDescription open={open} Title={name} Description={description} />
        </TaskContainerMain>
    )
}


export default function TableTask() {
    const [state, setState] = useState({
        numberActivate: 1,
        rangeTeeth: [],
        isMax: false,
        isMin: true,
        Tasks: createData(8),
    })

   

    const getTask = async function (numberActivate) {
        let query
        try {
            query = await axios("/task/getTask", { method: "POST", data: { numberActivate } })

        }
        catch (err) {
            console.log(err)
            throw "Hay un error"
        }
        const { data } = query
        console.log(data)
        return data
    }
    
    useEffect(() => {
        async function fetch(){
            const data =await getTask(state.numberActivate)
            const { Tasks, rangeTeeth, isMax } = data
            setState({ ...state, Tasks, rangeTeeth, isMax })
        }
        fetch()

        
    }, [])

    async function searchTasks(numberActivate) {
        const { Tasks, rangeTeeth, isMax } = await getTask(numberActivate)
        let isMin=true
        if (numberActivate>5){
            isMin=false
        }
        setState({ ...state, numberActivate, Tasks, rangeTeeth, isMax,isMin })
    }

    return (
        <Background>
            <ContainerTable>
                <BarTitle>
                    {[" ", "Name", "Company", "Assigned", "End Date", "Done", ""].map((e, index) => <Title key={index}> {e}</Title>)}
                </BarTitle>
                {state.Tasks.map((props, index) => <TaskBar key={index}  {...props} />)}
            </ContainerTable>
            <TeethTab
                numberActivate={state.numberActivate}
                //rangeTeeth={state.rangeTeeth}
                rangeTeeth={state.rangeTeeth}
                eventTooth={searchTasks}
                isMax={state.isMax}
                isMin={state.isMin}
            />
        </Background>

    )
}