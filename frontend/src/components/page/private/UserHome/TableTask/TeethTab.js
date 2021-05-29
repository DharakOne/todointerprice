import React, { useState } from "react"
import Styled from "styled-components"


const Background = Styled.div`
    width:100%;
    background:#F5F5F5;
    padding:30px 0 30px;
    display:flex;
    justify-content:center;
`

const ContainerTeeth = Styled.div`
    height:40px;
    display:flex;
`

const Tooth = Styled.div`
    width:40px;
    background: ${(props) => props.activate ? "#FFA800" : "#FFFFFF"};
    border: 1px solid #E5E5E5;
    display:flex;
    justify-content:center;
    align-items:center;


    color:${(props) => props.activate ? "white" : "black"};
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
`
const FirstTooth = Styled(Tooth)`
    border-radius: 10px 0px 0px 10px;
`

const LastTooth = Styled(Tooth)`
    border-radius: 0px 10px 10px 0px;
`

const CenterTooth = Styled(Tooth)`

`


export default function TeethTab({ numberActivate, numberTeeth, eventTooth }) {

    function handleSearch(e) {
        const number = parseInt(e.target.getAttribute("title"))
        eventTooth(number)
    }

    function handleArrow(e) {
        const title = e.target.getAttribute("title")
        const number = title === "right" ? numberActivate + 1 : numberActivate - 1
        eventTooth(number)
    }

    function handleLast(e) {
        const number = numberTeeth + 1
        eventTooth(number)

    }

    function handleNumberTeeth() {
        const maxTeeth = 5
        const maxRange = maxTeeth + numberTeeth + 1

        let myArray = []

        for (let i = 0; i < maxRange; i++) {
            myArray.push(numberTeeth + i + 1)
        }
        console.log(myArray)
        return myArray
    }
    return (
        <Background>
            <ContainerTeeth>
                <FirstTooth onClick={handleArrow}
                    title="left">
                    {"<"}
                </FirstTooth>

                {
                    handleNumberTeeth().map((i) => { <CenterTooth key={i} activate={numberActivate === i} onClick={handleSearch} title={i} >{i}</CenterTooth> })
                }

                {
                    [0].map(() => {
                        if (numberTeeth > 5) {
                            return (<CenterTooth key={0} onClick={handleLast}>...</CenterTooth>)
                        }
                    })
                }
                <LastTooth
                    onClick={handleArrow}
                    title="right">
                    {">"}
                </LastTooth>

            </ContainerTeeth>
        </Background>
    )
}