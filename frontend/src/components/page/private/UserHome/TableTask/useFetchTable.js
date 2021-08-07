import { useState, useEffect, useRef } from "react"
import axios from "axios"

const initialState = {
    numberActivate: 1,
    rangeTeeth: [],
    isMax: false,
    isMin: true,
    Tasks: [],
}

const initFilter = { name: "" }


export default function useFetchTable(url) {
    const [state, setState] = useState(initialState)
    const [filter, setFilter] = useState(initFilter)
    const count = useRef(0)

    const getTask = async function (numberActivate = 1) {
        let query
        try {

            query = await axios(url, { method: "POST", data: { numberActivate, filter } })

        }
        catch (err) {
            console.log(err)
            throw "Hay un error"
        }
        const { data } = query
        console.log(data)
        return data
    }

    async function fetchReload() {
        const data = await getTask(state.numberActivate)
        let { Tasks, rangeTeeth, isMax } = data
        Tasks.forEach(function (task, i) {
            let date = Date.parse(task.endDate)
            date = new Date(date)
            date = date.toLocaleString()
            Tasks[i].endDate = date
        })

        setState({ ...state, Tasks, rangeTeeth, isMax })
    }

    useEffect(() => {
        fetchReload()
    }, [])



    async function searchTasks(numberActivate) {
        const { Tasks, rangeTeeth, isMax } = await getTask(numberActivate, filter)
        let isMin = true
        if (numberActivate > 5) {
            isMin = false
        }
        Tasks.forEach(function (task, i) {
            let date = Date.parse(task.endDate)
            date = new Date(date)
            date = date.toLocaleString()
            Tasks[i].endDate = date
        })
        setState({ ...state, numberActivate, Tasks, rangeTeeth, isMax, isMin })
    }

    useEffect(function () {
        if (count.current == 0) {
            count.current++
            return
        }

        searchTasks()
    }, [filter])

    function upDateFilterOut(newFilter) {
        setFilter(newFilter)
    }

    return { state, upDateFilterOut, searchTasks }

}