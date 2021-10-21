import React, { useState } from "react"
import Layout from "../../public/Layout"

import {
    Background, ContainerSignUp as ContainerProfile,
} from "../../public/newSignUp/Style"

import CardProfile from "./CardProfile"
import CardprofileEdict from "./CardProfileEdict"





export default function Profile() {
    const [isEdictProfile, setIsEdictProfile] = useState(false)

    function changeMode() {
        setIsEdictProfile(!isEdictProfile)
    }

    return (
        <Layout>
            <Background>
                <ContainerProfile bordeRadius="9px">
                    {isEdictProfile ? 
                    <CardprofileEdict changeMode={changeMode} /> :
                     <CardProfile changeMode={changeMode} />}
                </ContainerProfile>
            </Background>
        </Layout>
    )
}