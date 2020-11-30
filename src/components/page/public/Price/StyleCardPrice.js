import Styled from "styled-components"

export const CardPriceContainer = Styled.div`
    width: 200px;
    height: 330px;
    background: #FFFFFF; 
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius: 20px;
`

export const Title = Styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.045em;
    line-height: 14px;    
    color: #626262;
    margin-top:15px;
    margin-bottom:16px;
`

export const Description = Styled.div`
    font-family: Roboto;
    font-weight: 500;
    font-style: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.075em;
    color: #818181;
    margin-bottom:16px;
`

export const PriceContainerNumber = Styled.div`
    display:flex;
    margin-left:10px;
    margin-bottom:14px;

`
export const PriceDolar = Styled.span`    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;    
    letter-spacing:-1px;
    color: #3A5CB4;
    display:${(props)=>props.display?props.display:"inline"}
`

export const PriceNumber = Styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    letter-spacing: -3px;   
    color: #3A5CB4;
    line-height: 65px;
`
export const PriceMo = Styled.span`
    align-self: flex-end;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.045em;
    color: #3A5CB4;
    display:${(props)=>props.display?props.display:"inline"}
`
export const Requirement = Styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.045em;
    color: #818181;
    margin-bottom:14px;
`

export const FeaturesContainer=Styled.div`
`

export const Feature=Styled.div`
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: 0.045em;
    text-align: center;  
    margin-bottom:10px;
    color: #818181;
`