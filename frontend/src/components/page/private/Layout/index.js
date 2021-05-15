import React from "react"
import Container from "../../../utils/Container"
import AppBar from "../../public/Layout/AppBar"

export default function Layout (props){
    return(
        <Container>
            <AppBar/>
            {props.children}
        </Container>
    )
}