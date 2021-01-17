import React from "react"

import {
    CardPriceContainer, Title, Description,
    PriceContainerNumber, PriceDolar, PriceNumber, PriceMo,
    Requirement, FeaturesContainer, Feature
} from "./StyleCardPrice"
export default function CardPrice(props) {
    return (
        <CardPriceContainer>
            <Title>{props.title}</Title>
            <Description>
                {props.descripion}
            </Description>
            <PriceContainerNumber>
                <PriceDolar display={props.display} >$</PriceDolar>
                <PriceNumber>{props.conteiner}</PriceNumber>
                <PriceMo display={props.display}>/mo</PriceMo>
            </PriceContainerNumber>
            <Requirement>
                {props.requirement}
            </Requirement>
            <FeaturesContainer>
                {props.features.map((feature,index) => <Feature key={index}>{feature}</Feature>)}
            </FeaturesContainer>
        </CardPriceContainer>
    )
}