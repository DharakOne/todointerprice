import React, { useEffect, useRef, useState } from "react"
import Styled from "styled-components"

import { useSelector, useDispatch } from "react-redux"
import { getFilterTasks } from "../../../../../redux/task/action"

import TeethTab from "./TeethTab"
import ModeLarge from "./ModeLarge"

export const Background = Styled.div`
    width:100%;
    background:white;
    margin: 35px 0 77px; 
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:49px 0;
`

function TableTask() {
    const { table, filter } = useSelector(state => state.task)
    const dispach = useDispatch()
    const [modeSmall, setModeSmall] = useState(false)
    const [loadResolution, setLoadResolution] = useState(false)
    const count = useRef(0)

    function changePageTask(numberActivate) {
        dispach(getFilterTasks({ numberActivate, filter }))
    }
    const handleResizeWindow = () => {
        count.current++
        const condition = window.innerWidth <= 900
        if (condition) {
            setModeSmall(true)
        }
        if (!condition) {
            setModeSmall(false)
        }

    }
    useEffect(() => {
        handleResizeWindow()
        window.addEventListener("resize", handleResizeWindow);
        setLoadResolution(true)
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, [])

    useEffect(() => {
        dispach(getFilterTasks({ numberActivate: 1, filter: { name: "" } }))
    }, [dispach])

    return (
        <Background> 
            <ModeLarge Tasks={table.Tasks} />

            {table.Tasks.length > 0 &&
                <TeethTab
                    numberActivate={table.numberActivate}
                    rangeTeeth={table.rangeTeeth}
                    eventTooth={changePageTask}
                    isMax={table.isMax}
                    isMin={table.isMin}
                />}
        </Background>
    )
}
export default TableTask