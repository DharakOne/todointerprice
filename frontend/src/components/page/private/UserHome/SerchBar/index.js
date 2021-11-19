import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Styled from "styled-components"
import { getFilterTasks } from "../../../../../redux/task/action"

export const SearchBarInput=Styled.input`
    height:30px;
    justify-self: stretch;
`

export default function SearchBar() {
    const dispach = useDispatch()
    const [name, setName] = useState("")
    function handleInput(event) {

        const { value } = event.target
        setName(value)
        upDateFilterOut({ name: value })
    }

    function upDateFilterOut(filter) {
        dispach(getFilterTasks({ numberActivate: 1, filter }))
    }

    return (
        <SearchBarInput placeholder="Search your tasks" onChange={handleInput} value={name} />
    )
}