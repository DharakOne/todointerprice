import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import {getFilterTasks} from "../../../../../redux/task/action"


import TaskBar from "./TaskBar"
import TeethTab from "./TeethTab"
import SearchBar from "./SerchBar"

import {
    Background, BarTitle, Title, ContainerTable
} from "./Style"


function TableTask() {
    const { table,filter} = useSelector(state => state.task)
    const dispach = useDispatch()

    function upDateFilterOut (filter){
        dispach(getFilterTasks({numberActivate:1, filter}))
    }

    function changePageTask(numberActivate){
        dispach(getFilterTasks({numberActivate,filter}))
    }

    useEffect(() => {
        dispach(getFilterTasks({numberActivate:1,filter:{name:""}}))
    }, [dispach])

    return (
        <Background>
            <SearchBar upDateFilterOut={upDateFilterOut} />
            <ContainerTable>

                <BarTitle>
                    {[" ", "Name", "Company", "Assigned", "End Date", "Done", ""].map((e, index) => <Title key={index}> {e}</Title>)}
                </BarTitle>
                {table.Tasks.map((props, index) => <TaskBar key={index}  {...props} />)}
            </ContainerTable>
            
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