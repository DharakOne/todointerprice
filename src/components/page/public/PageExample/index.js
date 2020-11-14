import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import {
    ConteinerPageExample,
    ConteinerParagraph,
    Title, Background
} from "./PageExampleStyle"


export default function PageExample() {
    const location = useLocation()

    const [title, setTitle] = useState("")
    useEffect(() => {
        const urlEncode=location.pathname.replace("%3F","?")
        setTitle(urlEncode.slice(location.pathname.lastIndexOf("/") + 1, location.pathname.length))
    }, [location])

    return (
        <ConteinerPageExample>
            <Background>
                <Title>{title}</Title>
                <ConteinerParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
                    tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
                    ea commodi consequat. Quis aute iure reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
                    cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    , sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid
                    ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
                    cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.
            </ConteinerParagraph>
            </Background>
        </ConteinerPageExample>
    )
}