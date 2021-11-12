import React, { useState, useRef } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"

import EdictTask from "./EdictModal"

import { getFilterTasks } from "../../../../../redux/task/action"
import TaskDescription from './TaskDescription'
import { TaskContainer, TaskContainerMain, Typography, CheckInput, ToolContainer, IconRotate } from "./Style"
import IconStyle from "../../../../utils/IconStyle"


import ArrowRight from "./Icons/ArrowRight.svg"
import Pen from "./Icons/Pen.svg"
import Delete from "./Icons/Delete.svg"


export default function TaskBar({ company, assigned, name, endDate, description, done, _id }) {
    const [open, setOpen] = useState(false)
    const [waitRequest, setWaitRequest] = useState(false)
    const dispatch = useDispatch()
    const taskInformation = useSelector(state => state.task)
    const checkReference = useRef()
    const [isOpenEdict, setIsOpenEdict] = useState(false)
    const countRef = useRef(0)

    function handleDeleteTask() {
        countRef.current++
        console.log(countRef)
        if (waitRequest == true) {
            return
        }
        setWaitRequest(!waitRequest)
        axios({ method: "post", url: "task/deleteTask", data: { idTask: _id } }).then(
            (response) => {

                let { filter } = taskInformation

                if (taskInformation.table.Tasks.length == 1 && taskInformation.table.numberActivate != 1) {
                    dispatch(getFilterTasks({
                        numberActivate: taskInformation.table.numberActivate - 1,
                        filter
                    }))
                }
                else {
                    console.log(filter)
                    dispatch(getFilterTasks({ numberActivate: taskInformation.table.numberActivate, filter }))
                }
            }
        )
        setWaitRequest(!waitRequest)
    }
    function handleCheck() {
        axios({ method: "post", url: "task/check", data: { idTask: _id, done: !done } }).then(
            () => {
                let { filter } = taskInformation
                if (taskInformation.table.Tasks.length == 1 && taskInformation.table.numberActivate != 1) {
                    dispatch(getFilterTasks({
                        numberActivate: taskInformation.table.numberActivate - 1,
                        filter
                    }))
                }
                else {
                    console.log(filter)
                    dispatch(getFilterTasks({ numberActivate: taskInformation.table.numberActivate, filter }))
                }
            }
        )
    }

    function handleEdictModal() {
        setIsOpenEdict(!isOpenEdict)
    }
    return (
        <TaskContainerMain>
            <TaskContainer>
                <IconRotate Rotate={open ? "90deg" : "0deg"} onClick={() => { setOpen(!open) }}><ArrowRight /></IconRotate>
                <Typography weight color={"#5988FF"}> {name}</Typography>
                <Typography> {company}</Typography>
                <Typography> {assigned}</Typography>
                <Typography> {endDate}</Typography>
                <CheckInput ref={checkReference} readOnly checked={done} onChange={handleCheck} />
                <ToolContainer>
                    <IconStyle cursor="pointer">
                        <Delete onClick={handleDeleteTask} />
                    </IconStyle>
                    <IconStyle cursor="pointer" >
                        <Pen onClick={handleEdictModal} />
                    </IconStyle>
                </ToolContainer>
            </TaskContainer>
            <TaskDescription open={open} Name={name} Description={description} />
            {isOpenEdict ?<EdictTask isOpen={isOpenEdict} eventClose={handleEdictModal} data={{ company, assigned, name, endDate, description, done, _id }} dateInfo={"ghgh"} />:null}
            
        </TaskContainerMain>
    )
}