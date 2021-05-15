import Styled from "styled-components"

export const ContainerUserHome = Styled.div`
    background: rgba(245, 245, 245);
    width:100%;
    display:grid;
    justify-items:center;
`
export const SecondBarContainer = Styled.div`
    display:grid;
    grid-template-columns: min-content auto  min-content;
    width:80%;
    justify-items:center;
    align-items:center;
    margin: 35px 0 35px ;
    column-gap: 3.333%;
`
export const Title = Styled.label`
    font-family: Roboto;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    /* identical to box height */
    
    color: #000000;
    font-style: normal;
`


export const SearchBarContainer = Styled.div`
    height:32px;
    background-color:white;
    width:100%;
    display:grid;
    grid-template-columns: auto min-content;
`
export const SearchBar=Styled.input`
    width:100%;
`



export const CreateStyle = Styled.div`
    background: #5E6EFF;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    height:60px;
    width:60px;
    display:flex;
    justify-content:center;
    align-items:center;
    color: #FFFFFF;
    border-radius:50%;
`
