import React, { useEffect } from 'react'
import TaskBar from './TaskBar'
import {
    BarTitle, Title, ContainerTable
} from "./Style"

export default function ModeLarge({Tasks}) {
    return (

            <ContainerTable>
                <BarTitle>
                    {[" ", "Name", "Company", "Assigned", "End Date", "Done", ""].map((e, index) => <Title key={index}> {e}</Title>)}
                </BarTitle>
                {Tasks.map((props, index) => <TaskBar key={index}  {...props} />)}
            </ContainerTable>
    )
}