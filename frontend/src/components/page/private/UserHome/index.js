import React, { useState } from "react"
import Layout from "../../public/Layout"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import Styled from "styled-components"

import { logOut } from "../../../../redux/user/action"
import { ContainerUserHome, Title, SecondBarContainer, SearchBar, CreateStyle, SearchBarContainer } from "./UserStyle"
import IconStyle from "../../../utils/IconStyle"
import TableTask from "./TableTask"

import PageTask from "./TaskModal"

import IconLens from "./lens.svg"

const LensIconStyle = Styled(IconStyle)`
    background: rgba(255, 168, 0, 1);
    width: 42px;
    height:42px;
    border-radius: 0px 7px 7px 0px;
    cursor:pointer;
`

function UserHome(props) {
    const history = useHistory()
    const [state, setState] = useState({
        isOpenCreate: false
    })

    function handledLogOut() {

        props.logOut()
        localStorage.removeItem("token")
        history.push("/")
    }


    function handleTaskCreate() {
        console.log("I passed to closeTask")
        setState({ ...state, isOpenCreate: !state.isOpenCreate })
    }
    return (
        <Layout>
            <ContainerUserHome>
                <SecondBarContainer>
                    <Title> Task</Title>
                    <SearchBarContainer>
                        <SearchBar />
                        <LensIconStyle ><IconLens /></LensIconStyle>
                    </SearchBarContainer>
                    <CreateStyle onClick={handleTaskCreate}>+</CreateStyle>
                </SecondBarContainer>
                <TableTask />
            </ContainerUserHome>
            <PageTask isOpen={state.isOpenCreate} eventClose={handleTaskCreate} />
        </Layout>)
}

const mapDispatchToProps = {
    logOut
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)