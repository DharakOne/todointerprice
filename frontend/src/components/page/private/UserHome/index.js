import React, { useRef, useState } from "react"
import Layout from "../../public/Layout"
import { ContainerUserHome, Title, SecondBarContainer, CreateStyle } from "./UserStyle"
import TableTask from "./TableTask"
import CreateTaskModal from "./TaskModal"



function UserHome(props) {
    const [state, setState] = useState({
        isOpenCreate: false
    })

    function handleTaskCreate() {
        console.log("I passed to closeTask")
        setState({ ...state, isOpenCreate: !state.isOpenCreate })
    }

    return (
        <Layout>
            <ContainerUserHome>
                <SecondBarContainer>
                    <Title>Task</Title>
                    <CreateStyle onClick={handleTaskCreate}>+</CreateStyle>
                </SecondBarContainer>
                <TableTask />
            </ContainerUserHome>
            <CreateTaskModal isOpen={state.isOpenCreate} eventClose={handleTaskCreate} />
        </Layout>
    )
}



export default UserHome