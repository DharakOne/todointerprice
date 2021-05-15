import React from "react"
import Layout from "../../public/Layout"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"

import { logOut } from "../../../../redux/user/action"
import { ContainerUserHome, Title, SecondBarContainer, SearchBar, CreateStyle, SearchBarContainer } from "./UserStyle"
import IconStyle from "../../../utils/IconStyle"
import IconLens from "./lens.svg"
import Styled from "styled-components"

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

                <p>My user name is  {props.user.userName}</p>
                <p>My email is {props.user.email}</p>
                <button onClick={handledLogOut}>Log Out</button>
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