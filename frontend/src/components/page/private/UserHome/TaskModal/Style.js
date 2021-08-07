import Styled from "styled-components"

export const ContainerModal = Styled.div`
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
export const TaskContainer = Styled.div`
    width: max(300px,416px);
    margin:0 5%;
    height: 580px;
    background: #FFFFFF;
    border: 1px solid #25D366;
    box-sizing: border-box;
    border-radius: 3px;
    display:flex;
    justify-content:center;
    border-top:6px solid #25D366;

`

export const MarginContainer = Styled.div`
    width:92%;
`

export const Title = Styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size:${(props) => props.fontSize ? props.fontSize : "24px"};
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.045em;
    color: #363636;
    margin: 12px 0;
`

//Input Componenent

export const ContainterInput = Styled.div`
    width: 100%;
    margin-bottom: 14px;
`

export const InputTittle = Styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.size ? props.size : "14px"} ;
    line-height: 16px;
    letter-spacing: 0.045em;
    color: #818181;
`

export const InputText = Styled.input`
    width:100%;
    height:32px;
    margin-top:5px;
    outline: none;
    border: 1px solid #5988FF;
    &:hover{
        outline: none;
    }
`

export const InputArea = Styled.textarea`
    margin-top:5px;
    border: 1px solid #5988FF;
    height: 100px;
    width:100%;

    &:hover{
        outline: none;
    }
`

//Selection Input


export const ContainerInputSelection = Styled(ContainterInput)`
    display:grid;
    grid-template-columns: repeat(2,auto);
    grid-template-rows: min-content min-content;
    justify-content:center;
    grid-column-gap:27px;
    grid-row-gap: 10px;


`

export const DoneInput = Styled.input.attrs(() => ({
    type: "checkbox"

}))`
    background: #E5E5E5;
`

export const DateInput = Styled.input.attrs(() => ({
    type: "datetime-local"
}))`
`
//Buttoms

export const ContainerButtoms= Styled.div`
    display:grid;
    grid-template-columns: min-content min-content;
    grid-column-gap: 10px;
    justify-content:center;
    margin-bottom: 10px;
    margin-top:25px;
`

export const Buttom = Styled.div`
    background: ${props => props.background } ;
    cursor: pointer;
    padding:8px 20px;
    border-radius:12px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    text-align: center;
    letter-spacing: 0.045em;

    color: #FFFFFF;


`
