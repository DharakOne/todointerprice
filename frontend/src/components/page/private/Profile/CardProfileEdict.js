import React, { Fragment, useEffect, useState } from "react"
import useForm from "../../../utils/useForm"
import axios from "axios"
import useApi from "../../../utils/apiHook"

import {
    HeadContainer, HeadTitle, FomrContainer
} from "../../public/newSignUp/Style"
import InputText from "./InputText"
import Button from "../../../utils/Buttom" 
import { ContainerButtomEdict, ContainerPasswordT, PaswordLabel } from "./Style"
import BlockError from "../../../utils/BlockError"

export default function CardprofileEdict({ changeMode }) {
    const [updatePassword, setUpdatePassword] = useState(false)
    const { refForm, getDataRef, getInputRef } = useForm()
    const { answer, waitAnswer, handeldEvent, errorRequest } = useApi(1000)
    const [errorPassword, setErrorPassword] = useState(false)

    useEffect(function () {
        axios.get("user/getDataProfile")
            .then(
                function (response) {
                    const { data } = response
                    const refInp = getInputRef()
                    console.log(refInp)
                    Object.keys(refInp).map(key => refInp[key].value = data[key])
                })

            .catch(
                function (error) {
                    console.log(error)
                })
    }, [getInputRef])

    function handleSubmit() {
        const data = getDataRef()
        console.log(data)
        setErrorPassword(false)
        if (data["newPassword"] !== data["confirmPassword"]) {
            setErrorPassword(true)
            return
        }
        handeldEvent({ url: "user/updateDataUser", method: "post", config: { data } })
            .then(response => changeMode())
            .catch(error => console.log(error.data.errors))
    }

    return (
        <Fragment>
            <HeadContainer>
                <HeadTitle>
                    Edict Info
                </HeadTitle>
            </HeadContainer>
            <form ref={refForm} >
                <FomrContainer>
                    <InputText labelName="Email" name="email" />
                    <InputText labelName="User Name" name="userName" />
                    <InputText labelName="Phone Number" name="phoneNumber" />
                    <ContainerPasswordT>
                        <PaswordLabel>Change Password </PaswordLabel> <input type="checkbox" checked={updatePassword} onChange={() => setUpdatePassword(!updatePassword)} />
                    </ContainerPasswordT>
                    {updatePassword &&
                        <Fragment>
                            <InputText type="password" labelName="New Password" name="newPassword" />
                            <InputText type="password" labelName="Confirm Password" name="confirmPassword" />
                        </Fragment>}


                </FomrContainer>


            </form>
            <BlockError errorMensage={errorPassword ? "Your passwords do not match" : answer.data} isError={errorPassword ? errorPassword : errorRequest} />
            <ContainerButtomEdict>

                <Button
                    onClick={changeMode}
                    background="hsl(0,100%,65%)"
                    backgroundActive="hsl(360,60%,75%)"
                    padding={"10px 36px"}
                >
                    cancel
                </Button>

                <Button
                    onClick={handleSubmit}
                    background={waitAnswer ? "hsl(234,50%,90%)" : "hsl(234,100%,68%)"}
                    backgroundActive="hsl(234,60%,75%)"
                    padding={"10px 36px"}
                    BorderRadius="39px"
                    disabled={waitAnswer}
                >
                    Save Info
                </Button >

            </ContainerButtomEdict>
        </Fragment>
    )
}