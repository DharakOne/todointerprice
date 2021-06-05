import React from "react"
import { createPortal } from "react-dom"
import Styled from "styled-components"

const ContainerModal = Styled.div`
    display:flex;
    z-index: 1; 
    position: fixed; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4); 
    justify-content:center;
    align-items:center;
`
const TaskContainer = Styled.div`
    width: max(300px,416px);
    margin:0 5%;
    height: 569px;
    background: #FFFFFF;
    border: 1px solid #25D366;
    box-sizing: border-box;
    border-radius: 8px;
    display:flex;
    flex-direction:column;
`

const Title=Styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.045em;
    
    color: #363636;
`

const ContainterInput =Styled.div`
    width:90%;
`

const InputTitle=Styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.045em;

    color: #818181;

`

export default function PageTask({ isOpen, eventClose }) {
    if (!isOpen) return null
    return createPortal(
        <ContainerModal>
            <TaskContainer>
                <h3>Portal Prueba</h3>
                <button onClick={eventClose}> buttom</button>
            </TaskContainer>
        </ContainerModal>
        ,
        document.getElementById("portal")
    )
}