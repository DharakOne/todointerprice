import React from "react"
import Styled from "styled-components"

import HomeContainer from "../../../utils/Container"
import Header from "./Header"
import Features from "./Features"
import Footer from "./Footer"


export default function Home() {
    return (
        <HomeContainer direction="column">
            <Header />
            <Features />
            <Footer />
        </HomeContainer>

    )
}