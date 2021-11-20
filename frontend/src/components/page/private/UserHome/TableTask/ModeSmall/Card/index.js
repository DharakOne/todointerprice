import React,{useState,useRef} from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"

import EdictTask from "../../EdictModal"
import { getFilterTasks } from "../../../../../../../redux/task/action"

import IconStyle from "../../../../../../utils/IconStyle"
import { IconTask,ContainerCard,Info,TitleInfo,ContainerInfo, TitleDescription, Description, ContainerIcons,ContainerDescription,CheckInput } from "./style"
import Pen from "../../Icons/Pen.svg"
import Delete from "../../Icons/Delete.svg"



export default function CardSmall({data}) {

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
        axios({ method: "post", url: "task/deleteTask", data: { idTask: data._id } }).then(
            (response) => {

                let { filter } = taskInformation

                if (taskInformation.table.Tasks.length == 1 && taskInformation.table.numberActivate != 1) {
                    function delay() {
                        dispatch(getFilterTasks({
                            numberActivate: taskInformation.table.numberActivate - 1,
                            filter
                        }))
                        delay()

                    }

                }
                else {
                    function delay() {
                        dispatch(getFilterTasks({ numberActivate: taskInformation.table.numberActivate, filter }))
                    }
                    delay()

                }
            }
        )
    }
    function handleCheck() {
        
        axios({ method: "post", url: "task/check", data:data}).then(
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

    function formTitle(string) {
        let formString = string.split(" ")
        let myformar = ""

        if ((formString.length > 1)) {
            myformar = formString[0][0] + formString[1][0]
            return myformar
        }
        else {

            if (formString[0].length > 1) {
                myformar = formString[0][0] + formString[0][1]
            }
            else {
                myformar = formString[0][0]
            }

            return myformar
        }
    }
    return (
        <ContainerCard>
            <IconTask>{formTitle(data.name)}</IconTask>
            <ContainerInfo>
                <TitleInfo>Name</TitleInfo>
                <Info>{data.name}</Info>
            </ContainerInfo>
            <ContainerInfo>
                <TitleInfo>Company</TitleInfo>
                <Info>{data.company}</Info>
            </ContainerInfo>
            <ContainerInfo>
                <TitleInfo>Assigned</TitleInfo>
                <Info>{data.assigned}</Info>
            </ContainerInfo>
            <ContainerInfo>
                <TitleInfo>End Date</TitleInfo>
                <Info>{data.endDate}</Info>
            </ContainerInfo>
            <ContainerInfo>
                <TitleInfo>Name</TitleInfo>
                <Info>{data.name}</Info>
            </ContainerInfo>
            <ContainerDescription>
                <TitleDescription>
                    Description
                </TitleDescription>
                <Description>
                    {data.description}
                </Description>
            </ContainerDescription>
            <ContainerIcons>
                <IconStyle onClick={handleEdictModal} >
                    <Pen/>
                </IconStyle>
                <CheckInput ref={checkReference}  readOnly checked={data.done} onChange={handleCheck} />
                <IconStyle>
                    <Delete onClick={handleDeleteTask}/>
                </IconStyle>
            </ContainerIcons>
            {isOpenEdict ? <EdictTask isOpen={isOpenEdict} eventClose={handleEdictModal} data={data} dateInfo={"ghgh"} /> : null}
        </ContainerCard>
    )
}