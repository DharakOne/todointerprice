import React,{useState} from "react"

import Layout from "../Layout"
import {
    ContainerPrice, ConteinerTitle, Tittle, ContainerSwitchPrice,
    SwitchPrice, PriceLeft, PriceRight, Offer, CardContainer
} from "./StylePrice"
import CardPrice from "./CardPrice"



export default function Price() {
  const [priceSwich,setPriceSwich]=useState(true)
  const [priceValue,setPriceValue]=useState({creator:20,professional:80})
        function changePrice(event){
            name=event.target.getAttribute('name')
            if(name=="left"){
                setPriceSwich(true)
                setPriceValue({creator:20,professional:80})
            }else{
                setPriceSwich(false)
                setPriceValue({creator:16,professional:64})
            }
        }
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
                        <PriceLeft On={priceSwich} onClick={changePrice} name="left">
                            Monthly Billing
                        </PriceLeft>
                        <PriceRight On={!priceSwich} onClick={changePrice}>
                            Annual Billing
                            <Offer>
                                Save 20%
                            </Offer>
                        </PriceRight>
                    </SwitchPrice>
                </ContainerSwitchPrice>
                <CardContainer>
                    <CardPrice
                        title="FREE"
                        description="Best way for Anyone to get started"
                        conteiner="0"
                        requirement="No credit card required"
                        features={["100 Task", "1000 Check", "1 People per group", "1 group"]}
                    />
                    <CardPrice
                        title="CREATOR"
                        description="Basic set for indidual manager"
                        conteiner={priceValue.creator}
                        requirement="Charging 192$ per year"
                        features=
                        {["1000 Task",
                            "2000 Check",
                            "Ability for Sharing",
                            "10 People per group",
                            "One support per day",
                            "3 Group"
                        ]}
                    />
                    <CardPrice
                        title="PROFESSIONAL"
                        description="Advanced set for well-versed designers and teams"
                        conteiner={priceValue.professional}
                        requirement="Charging 768$ per year"
                        features=
                        {[
                            "Unlimited  Task",
                            "Unlimited  Check",
                            "Ability for Sharing",
                            "100 People per group",
                            "10 support per day",
                            "20 Group"
                        ]}
                    />
                    <CardPrice display={"none"}
                        title="ENTERPRICE"
                        description="Custom set for media companies and enterprises"
                        conteiner="@"
                        requirement="TODO@TODO.com"
                        features=
                        {
                            ["Reach us if you´d like to have more  peopleforgroup, more group or some special features."
                        ]}
                    />
                </CardContainer>
            </ContainerPrice>
        </Layout>
    )
}