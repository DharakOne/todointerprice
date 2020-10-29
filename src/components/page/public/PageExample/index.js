import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function PageExample() {
    const location = useLocation()
    
    const [title, setTitle] = useState("")
    useEffect(() => {
        setTitle(location.pathname.slice(location.pathname.lastIndexOf("/") + 1, location.pathname.length))
    }, [location])

    return (
        <div>
            {title}
        </div>
    )
}