import React from "react"

import Layout from "../Layout"
import {
    ContainerPrice, ConteinerTitle, Tittle, ContainerSwitchPrice,
    SwitchPrice, PriceLeft, PriceRight, Offer, CardContainer
} from "./StylePrice"
import CardPrice from "./CardPrice"

export default function Price() {
    return (
        <Layout>
            <ContainerPrice>

                <ConteinerTitle>
                    <Tittle>
                        Our Plans
                    </Tittle>
                </ConteinerTitle>
                <ContainerSwitchPrice>
                    <SwitchPrice>
                        <PriceLeft>
                            Monthly Billing
                        </PriceLeft>
                        <PriceRight>
                            Annual Billing
                            <Offer>
                                Save 20%
                            </Offer>
                        </PriceRight>
                    </SwitchPrice>
                </ContainerSwitchPrice>
                <CardContainer>
                    <CardPrice conteiner="0" />
                    <CardPrice conteiner="16"/>
                    <CardPrice conteiner="64"/>
                    <CardPrice conteiner="@"/>
                </CardContainer>
            </ContainerPrice>
        </Layout>
    )
}