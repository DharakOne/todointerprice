import React from "react"
import Layout from "../Layout"
import {connect} from "react-redux"
import {logOut} from "../../../../redux/user/action"
import { useHistory } from "react-router-dom"

function UserHome(props) {
    const history=useHistory()
    function handledLogOut(){
        props.logOut()
        history.push("/")
    }
    return (
        <Layout>
            <p>My user name is  {props.user.name}</p>
            <p>My email is {props.user.email}</p>
            <button onClick={handledLogOut}>Log Out</button>
        </Layout>)
}

const mapDispatchToProps={
    logOut
}

const mapStateToProps=(state)=>({
    user:state.user
})

export default connect(mapStateToProps,mapDispatchToProps)(UserHome)