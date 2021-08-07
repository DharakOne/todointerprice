import React,{useState} from "react"

import useFetchTable from "./useFetchTable"

import TaskBar from "./TaskBar"
import TeethTab from "./TeethTab"
import SearchBar from "./SerchBar"

import {
    Background, BarTitle, Title, ContainerTable
} from "./Style"


function TableTask() {
    const { state,upDateFilterOut, searchTasks } = useFetchTable("/task/getTask")



    return (
            <Background>
                <SearchBar upDateFilterOut={upDateFilterOut}/>
                <ContainerTable>

                    <BarTitle>
                        {[" ", "Name", "Company", "Assigned", "End Date", "Done", ""].map((e, index) => <Title key={index}> {e}</Title>)}
                    </BarTitle>
                    {state.Tasks.map((props, index) => <TaskBar key={index}  {...props} />)}
                </ContainerTable>

                {state.Tasks.length && <TeethTab
                    numberActivate={state.numberActivate}
                    rangeTeeth={state.rangeTeeth}
                    eventTooth={searchTasks}
                    isMax={state.isMax}
                    isMin={state.isMin}
                />}

            </Background>
    )
}

export default TableTask