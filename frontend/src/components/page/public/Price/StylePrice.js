import Styled from "styled-components"
import Container from "../../../utils/Container"
import CardPrice from "./CardPrice"


export const ContainerPrice = Styled.div`
    background: radial-gradient(37.85% 74.84% at 45.56% 45.56%, #7947B6 0%, #5E6EFF 100%);
    display:flex;
    flex-direction: column;
    align-items:center;
`

export const ConteinerTitle = Styled.div`
    display:flex;
    justify-content:center; 
    margin:100px 0 40px; 
    @media (max-width: 560px) {
        margin:40px 0 40px;
    }

    @media (max-width: 506px) {
        margin:20px 0 20px;
    }

`

export const Tittle = Styled.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 84px;
    color: #232323;
    @media (max-width: 506px) {
        font-size: 48px;
    }

`

export const ContainerSwitchPrice = Styled.div`
    display:flex;
    justify-content:center;
    margin-bottom: 35px;
    
`

export const SwitchPrice = Styled.div`
    max-width: 577px;
    min-height: 50px;
    background:white;
    border: 3px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 32px;

    display:flex;
    align-items:center;
    @media (max-width: 630px) {
        display:grid;
        grid-template-rows: auto auto;
        row-gap:5px;
        border-radius: 0px;
    }

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
    cursor: pointer;
    border-radius: 20px 0 0 20px;     
    color: ${(props) => props.On ? "#626262;" : "white"};
    background:${(props) => props.On ? "none" : "#7053CD"};

    @media (max-width: 630px) {
    border-radius: 0px;     
    }
`
export const PriceRight = Styled(PriceLeft)`
    letter-spacing: 0.05em;
    border-radius: 0 20px  20px 0;     
`
export const Offer = Styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;    
    letter-spacing: 0.015em;
    color: #25D366;
    margin-left:12px;
`

export const CardContainer = Styled.div`
    display:grid;
    margin-bottom:37px;
    grid-template-columns: auto auto auto auto;
    column-gap:12px;
    row-gap:20px;
    @media (max-width: 890px) {
        grid-template-columns:auto auto;
    }
    @media (max-width: 430px) {
        grid-template-columns:auto;
    }


`