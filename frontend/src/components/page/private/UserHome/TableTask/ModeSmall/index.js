import React, { useEffect } from "react"
import CardSmall from "./Card"
import { ContainerModeSmall } from "./style"

export default function ModeSmall({Tasks}){
    return (
        <ContainerModeSmall>
                {Tasks.map((props, index) => <CardSmall key={index}  data={props} />)}
        </ContainerModeSmall>
    )
}