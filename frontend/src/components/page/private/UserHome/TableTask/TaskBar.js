import React ,{useState,useEffect}from "react"  
import TaskDescription from './TaskDescription'
import {TaskContainer ,TaskContainerMain,Typography,CheckInput,ToolContainer,IconRotate} from "./Style" 
import IconStyle from "../../../../utils/IconStyle"


import ArrowRight from "./Icons/ArrowRight.svg" 
import Pen from "./Icons/Pen.svg"
import Delete from "./Icons/Delete.svg"


export default function TaskBar({ company, assigned, name, endDate, description,done }) {
    const [open, setOpen] = useState(false)
    return (
        <TaskContainerMain>
            <TaskContainer>
                <IconRotate Rotate={open ? "90deg" : "0deg"} onClick={() => { setOpen(!open) }}><ArrowRight /></IconRotate>
                <Typography weight color={"#5988FF"}> {name}</Typography>
                <Typography> {company}</Typography>
                <Typography> {assigned}</Typography>
                <Typography> {endDate}</Typography>
                <CheckInput readOnly checked={done}/>
                <ToolContainer>
                    <IconStyle>
                        <Delete />
                    </IconStyle>
                    <IconStyle>
                        <Pen />
                    </IconStyle>
                </ToolContainer>
            </TaskContainer>
            <TaskDescription open={open} Name={name} Description={description} />
        </TaskContainerMain>
    )
}