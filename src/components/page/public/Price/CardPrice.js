import React from "react"

import {
    CardPriceContainer, Title, Description,
    PriceContainerNumber, PriceDolar, PriceNumber, PriceMo
} from "./CardPriceStyle"
export default function CardPrice({conteiner}) {
    return (
        <CardPriceContainer>
            <Title>FREE</Title>
            <Description>
                Best way for Anyone to get started
            </Description>
            <PriceContainerNumber>
                <PriceDolar>$</PriceDolar>
                <PriceNumber>{conteiner}</PriceNumber>
                <PriceMo>/mo</PriceMo>
            </PriceContainerNumber>
        </CardPriceContainer>
    )
}