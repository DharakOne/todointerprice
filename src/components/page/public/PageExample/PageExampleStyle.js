import Styled from "styled-components"


export const ConteinerPageExample=Styled.div`
    display: flex;
    justify-content:center;
`

export const Background=Styled.div`
    margin: 100px auto 100px;
    padding:50px 20px 50px;
    width:90%;
    background: #E8E8E8;
    display: flex;
    align-items: center; 
    flex-direction:column;
    @media (max-width: 800px) {
        margin: 60px auto 60px;
    }
    @media (max-width: 560px) {
        margin: 25px auto 25px;
    }
`
export const Title=Styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.045em;
    color: #000000;
    margin-bottom: 30px;
    text-align: center;

`

export const ConteinerParagraph=Styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    text-align: justify;
    text-justify: inter-word;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.045em;
    color: #000000;
    width:85%;
`