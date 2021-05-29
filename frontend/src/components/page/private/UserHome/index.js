import React from "react"
import Layout from "../../public/Layout"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import Styled from "styled-components"

import { logOut } from "../../../../redux/user/action"
import { ContainerUserHome, Title, SecondBarContainer, SearchBar, CreateStyle, SearchBarContainer } from "./UserStyle"
import IconStyle from "../../../utils/IconStyle"
import TableTask from "./TableTask"

import IconLens from "./lens.svg"

const LensIconStyle = Styled(IconStyle)`
    background: rgba(255, 168, 0, 1);
    width: 42px;
    height:42px;
    border-radius: 0px 7px 7px 0px;
`

function UserHome(props) {
    const history = useHistory()
    function handledLogOut() {

        props.logOut()
        localStorage.removeItem("token")
        history.push("/")
    }
    return (
        <Layout>
            <ContainerUserHome>
                <SecondBarContainer>
                    <Title> Task</Title>
                    <SearchBarContainer>
                        <SearchBar />
                        <LensIconStyle><IconLens /></LensIconStyle>
                    </SearchBarContainer>
                    <CreateStyle>+</CreateStyle>
                </SecondBarContainer>
                <TableTask/>
            </ContainerUserHome>
        </Layout>)
}

const mapDispatchToProps = {
    logOut
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)