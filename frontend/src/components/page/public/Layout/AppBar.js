import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import {useSelector,useDispatch,connect} from "react-redux"


import { LinkContainer, Link, AppBarContainer,LinkLogout } from "./AppBarStyle"
import Brand from "./Brand"

import {logOut} from "../../../../redux/user/action"

function ButtonLogout(prop) {
    const email=useSelector(state=>state.user.email)
    const dispacth=useDispatch()
    function handleLogout() {
        dispacth(logOut())
        localStorage.removeItem("token")
    }
    if (!email){
        return null
    }
    return (
        <LinkLogout onClick={handleLogout}>
            Logout
        </LinkLogout>
    )
}




function AppBar(props) {
    const location = useLocation()
    const [links, setLinks] = useState([])

    useEffect(

        function () {
            const listlink = props.user.email ? ["/user", "User Home", "/Price", "Price","Profile","Profile"] : ["/SingUp", "Sing Up", "/Price", "Price", "/SingIn", "Sing In", "/PageExample/About", "About"]
            const linksOn = []
            const pathname = location.pathname
            const idRemove = listlink.indexOf(pathname)
            let filterLink
            if (idRemove != -1) {
                filterLink = listlink.filter(item => (item !== listlink[idRemove]) && (item !== listlink[idRemove + 1]))
            } else {
                filterLink = listlink
            }
            for (let k = 0; k < filterLink.length / 2; k++) {
                linksOn.push([filterLink[k * 2], filterLink[k * 2 + 1]])
            }
            setLinks(linksOn)
        }
        , [location])



    return (
        <AppBarContainer>
            <Brand />
            <LinkContainer>
                {
                    links.map((link) => <Link key={link[0]} to={
                        {
                            pathname: link[0],
                        }
                    } > {link[1]} </Link>)
                }
                <ButtonLogout/>




            </LinkContainer>
        </AppBarContainer >
    )
}




const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(AppBar)
