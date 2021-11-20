import Styled from "styled-components"

export const ContainerUserHome = Styled.div`
    background: rgba(245, 245, 245);
    width:100%;
    display:grid;
    justify-items:center;
`
export const SecondBarContainer = Styled.div`
    display:grid;
    width:100%;
    justify-content:center;
    grid-template-columns: auto 0.7fr auto;
    margin: 35px auto 35px ;
    grid-column-gap:17px;
    align-items: center;
    @media (max-width: 920px) {
    grid-template-columns: 0.7fr auto;
    }
`
export const Title = Styled.label`
    font-family: Roboto;
    font-weight: bold;
    font-size:8ch;
    line-height: 75px;
    /* identical to box height */
    color: #000000;
    font-style: normal;
    margin-right:5%;
    @media (max-width: 920px) {
        display:none;
    }
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
    cursor: pointer;
`