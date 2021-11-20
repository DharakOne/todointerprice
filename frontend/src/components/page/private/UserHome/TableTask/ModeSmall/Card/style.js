import styled from "styled-components"

export const ContainerCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 4px;
    width:90%;
    max-width:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-bottom:40px;
`

export const ContainerInfo= styled.div`
    display:grid;
    grid-template-columns:50% 50% ;
    margin-bottom:15px;
    width:80%;
    justify-items:center;
    border-bottom:1px solid #C4C4C4;

`  

export const Info=styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 21px;
    /* identical to box height */
    color: #626262;
`

export const TitleInfo=styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 21px;
    color: #363636;
`

export const IconTask = styled.div`
    padding:18px 18px;
    background: #25D366;
    height:min-content;
    width:min-content;
    border-radius:30px;
    font-weight: bold;
    font-family: Roboto;
    font-style: normal;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin:25px;
`
export const ContainerDescription=styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
`

export const TitleDescription=styled.div`
    font-family: Roboto;
    font-weight: normal;
    font-style: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #363636;
`

export const Description =styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #7A7A7A;
    width:80%;
    margin: 20px auto;
    text-align: justify;
`

export const ContainerIcons=styled.div`
    display:grid;
    grid-template-columns: auto auto auto;
    column-gap:10px;
    justify-content:center;
`

export const CheckInput =styled.input.attrs({ type: "checkbox" })`
    width: 20px;
    height: 20px;
`
