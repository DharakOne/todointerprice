import React, { useState } from "react"
import { Background, BarTitle, Title, TaskContainer, Typography, ToolContainer, Input, ContainerTable, TaskDescriptionBackground, IconTask, TitleDescreption, ContainerDescription, ParagraphDescription, TaskContainerMain } from "./Style"

import ArrowRight from "./Icons/ArrowRight.svg"
import Pen from "./Icons/Pen.svg"
import Delete from "./Icons/Delete.svg"
import IconStyle from "../../../../utils/IconStyle"
import Styled from "styled-components"


import TeethTab from "./TeethTab"



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

function TaskBar({ Company, Assigned, Name, EndDate, Description }) {
    const [open, setOpen] = useState(false)

    return (
        <TaskContainerMain>
            <TaskContainer>
                <IconRotate Rotate={open ? "90deg" : "0deg"} onClick={() => { setOpen(!open) }}><ArrowRight /></IconRotate>
                <Typography weight color={"#5988FF"}> {Name}</Typography>
                <Typography> {Company}</Typography>
                <Typography> {Assigned}</Typography>
                <Typography> {EndDate}</Typography>
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
            <TaskDescription open={open} Title={Name} Description={Description} />
        </TaskContainerMain>
    )
}


export default function TableTask() {
    const [state, setState] = useState({
        numberActivate: 1,
        rangeTeeth: [1, 2, 3, 4, 5],
        isMax: true,
        isMin: true,
        Tasks: createData(8),
    })


    function searchTasks(numberActivate) {
        const Name = "Task " + numberActivate
        let Tasks
            try {
                Tasks = createData(8, Name)
            } catch (error) {
                console.log(error)
                return

            }
        setState({ ...state, numberActivate, Tasks })
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
                rangeTeeth={state.rangeTeeth}
                eventTooth={searchTasks}
                isMax={state.isMax}
                isMin={state.isMin}
            />
        </Background>

    )
}