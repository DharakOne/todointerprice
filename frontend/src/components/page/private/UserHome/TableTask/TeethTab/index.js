import React, { useState } from "react"
import { Background, ContainerTeeth, FirstTooth, CenterTooth, LastTooth } from "./Style"


export default function TeethTab({ numberActivate, rangeTeeth, eventTooth, isMax = false, isMin = true }) {

    function handleSearch(e) {
        const number = parseInt(e.target.getAttribute("title"))
        eventTooth(number)
    }

    function handleArrow(e) {
        const title = e.target.getAttribute("title")
        const number = title === "right" ? numberActivate + 1 : numberActivate - 1
        const lastTeeh = rangeTeeth[rangeTeeth.length - 1]
        if (isMax && (lastTeeh < number)) {
            return
        }
        if (numberActivate <= 1 && title === "left") {
            return
        }
        eventTooth(number)
    }

    function handleExtreme(e) {
        const title = e.target.getAttribute("title")
        if (title == "PL") {
            const number = rangeTeeth[0] - 1
            eventTooth(number)
        } else {
            const lastTeeh = rangeTeeth[rangeTeeth.length - 1]
            const number = lastTeeh + 1
            console.log("aa")
            if (isMax && (lastTeeh < number)) {
                return
            }
            eventTooth(number)
        }

    }

    return (
        <Background>
            <ContainerTeeth>
                <FirstTooth onClick={handleArrow}
                    title="left">
                    {"<"}
                </FirstTooth>

                {!isMin && <CenterTooth title="PL" key={0} onClick={handleExtreme}>...</CenterTooth>}

                {

                    rangeTeeth.map((i) => <CenterTooth key={i} activate={numberActivate === i} onClick={handleSearch} title={i} >{i}</CenterTooth>)
                }
                {!isMax && <CenterTooth title="PR" key={0} onClick={handleExtreme}>...</CenterTooth>}


                <LastTooth
                    onClick={handleArrow}
                    title="right">
                    {">"}
                </LastTooth>

            </ContainerTeeth>
        </Background>
    )
}