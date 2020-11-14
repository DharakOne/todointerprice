import React from 'react'
import Styled from 'styled-components'
import Container from "../../../utils/Container"

import PersonIcon from "./Icons/Person.svg"
import DevicesIcon from "./Icons/Devices.svg"
import PencilIcon from "./Icons/Pencil.svg"
import GraphicIcon from "./Icons/Graphic.svg"



const FeaturesContainer = Styled(Container)`
    width:auto;
    margin:32px auto 93px;
`
const Title = Styled.label`
    font-family: Roboto;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    font-style: normal;
    text-align: center;
    @media (max-width: 800px) {
        margin-bottom:0;
        margin:0 5% 41px;
    }

`

const ReasonsContainer = Styled(Container)`
    display:grid;
    width:auto;
    grid-template-columns: repeat(4,auto);
    margin:40px auto 0;
    justify-items: center;
    @media (max-width: 1080px) {
        grid-template-columns:auto auto;
        grid-gap:20px;
    }
    @media (max-width: 600px) {
        grid-template-columns:auto;
    }
`
const Reason = Styled.div`
    flex-direction:row;
    width:250px;
    height:450px;
    background:white;
    margin:0 6.5px 0;
    background:white;
    text-align:center;
    background:#EFEFEF;
    border-radius: 41px;
`

const TitleReason = Styled.label`
    display:block;
    font-family: Roboto;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    font-style: normal;
    text-align: center;
    margin: 15px 0;
`

const ParagraphReason = Styled.div`
    font-family: Roboto;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    font-style: normal;
    text-align:justify;
    margin: 0 20px 0;
`



export default function Features() {
    return (
        <FeaturesContainer>
            <Title>Why should you choose TODO for their company?</Title>
            <ReasonsContainer>
                <Reason>
                    <TitleReason>Share Tasks</TitleReason>
                    <PersonIcon />
                    <ParagraphReason>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </ParagraphReason>
                </Reason>
                <Reason>
                    <TitleReason>Multi Plaform</TitleReason>
                    <DevicesIcon />
                    <ParagraphReason>
                        ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </ParagraphReason>
                </Reason>
                <Reason>
                    <TitleReason>Productive</TitleReason>
                    <GraphicIcon />
                    <ParagraphReason>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur velit esse cillum dolore
                        eu fugiat nulla.
                    </ParagraphReason>
                </Reason>
                <Reason>
                    <TitleReason>Creative</TitleReason>
                    <PersonIcon />
                    <ParagraphReason>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit.
                    </ParagraphReason>
                </Reason>
            </ReasonsContainer>
        </FeaturesContainer>
    )
}