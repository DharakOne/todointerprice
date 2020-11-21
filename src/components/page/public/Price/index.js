import React from "react"
import Layout from "../Layout"
import { ContainerPrice, ConteinerTitle, Tittle, ContainerSwitchPrice, SwitchPrice, PriceLeft, PriceRight,Offer } from "./StylePrice"


export default function Price() {
    return (
        <ContainerPrice>
            <Layout>
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
            </Layout>
        </ContainerPrice>
    )
}