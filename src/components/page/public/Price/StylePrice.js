import Styled from "styled-components"
import Container from "../../../utils/Container"
import CardPrice from "./CardPrice"


export const ContainerPrice=Styled.div`
    background: radial-gradient(37.85% 74.84% at 45.56% 45.56%, #7947B6 0%, #5E6EFF 100%);
    display:flex;
    flex-direction: column;
    align-items:center;
` 

export const ConteinerTitle=Styled.div`
    display:flex;
    justify-content:center;
    margin:100px 0 40px;
`

export const Tittle= Styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 84px;
    color: #232323;
`

export const ContainerSwitchPrice=Styled.div`
    display:flex;
    justify-content:center;
    margin-bottom: 35px;
    
`

export const SwitchPrice=Styled.div`
    max-width: 577px;
    height: 50px;
    background:white;
    border: 3px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 32px;

    display:flex;
    align-items:center;
` 
export const PriceLeft = Styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 287px;
    height: 46px;    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.015em;
    color: #FFFFFF;
    background: #7053CD;
    border-radius: 20px 0 0 20px;     
`
export const PriceRight = Styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 287px;
    height: 46px;    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #626262;
`
export const  Offer=Styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;    
    letter-spacing: 0.015em;
    color: #25D366;
    margin-left:12px;
`

export const CardContainer=Styled.div`
    display:grid;
    margin-bottom:37px;
    grid-template-columns: auto auto auto auto;
    column-gap:12px;
`