import React from "react"
import Container from "../../../utils/Container"

export default function Layout (props){
    return(
        <Container>
            {props.children}
        </Container>
    )
}