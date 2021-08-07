import Styled from "styled-components"

export const Background = Styled.div`
    width:100%;
    background:#F5F5F5;
    padding:30px 0 30px;
    display:flex;
    justify-content:center;
`

export const ContainerTeeth = Styled.div`
    height:40px;
    display:flex;
`

export const Tooth = Styled.div`
    width:40px;
    background: ${(props) => props.activate ? "#FFA800" : "#FFFFFF"};
    border: 1px solid #E5E5E5;
    display:flex;
    justify-content:center;
    align-items:center;

    cursor: pointer;


    color:${(props) => props.activate ? "white" : "black"};
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
`

export const FirstTooth = Styled(Tooth)`
    border-radius: 10px 0px 0px 10px;
`

export const LastTooth = Styled(Tooth)`
    border-radius: 0px 10px 10px 0px;
`

export const CenterTooth = Styled(Tooth)`

`