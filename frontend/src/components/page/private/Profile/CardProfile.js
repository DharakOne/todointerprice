import React, { Fragment, useEffect } from "react"

import {
    HeadContainer, HeadTitle, FomrContainer
} from "../../public/newSignUp/Style"


import InputText from "./InputText"
import Button from "../../../utils/Buttom"
import useForm from "../../../utils/useForm"
import axios from "axios"
import { formDate } from "../../../utils/formatDate"

export default function CardProfile({ changeMode }) {

    const { refForm, getInputRef } = useForm()
    useEffect(function () {
        axios.get("user/getDataProfile")
            .then(
                function (response) {
                    const { data } = response
                    data["creation_date"] = formDate(data["creation_date"])
                    data["last_update_date"] = formDate(data["last_update_date"])
                    const refInp = getInputRef()
                    console.log(data)
                    Object.keys(refInp).map(key => refInp[key].value = data[key])
                })

            .catch(
                function (error) {
                    console.log(error)
                })

    }, [getInputRef])

    return (
        <Fragment>
            <HeadContainer>
                <HeadTitle>
                    Profile Info
                </HeadTitle>
            </HeadContainer>
            <form ref={refForm} >
                <FomrContainer>
                    <InputText disabled labelName="Email" name="email" />
                    <InputText disabled labelName="User Name" name="userName" />
                    <InputText disabled labelName="Phone Number" name="phoneNumber" />
                    <InputText disabled labelName="Creation Account Date" name="creation_date" />
                    <InputText disabled labelName="Last Update Account" name="last_update_date" />
                    <InputText disabled labelName="Number of tasks created" name="numTask" />
                </FomrContainer>

            </form>
            <Button
                onClick={changeMode}
                background="hsl(40,100%,50%)"
                backgroundActive="hsl(40,100%,80%)"
                padding={"10px 71px"}
            >
                Edict Profile
            </Button> 
        </Fragment>
    )
}