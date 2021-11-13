import axios from "axios"
import type from "./type"

function setDataTask({ table, filter }) {
    return {
        type: type.SET_FILTER_TASKS,
        payload: {
            table,
            filter
        }
    }
}

export const getFilterTasks = ({ numberActivate, filter }) => (dispach) => {
    const config = { method: "post", url: "task/getTask", data: { numberActivate, filter }}
    console.log(config)
    axios(config)
        .then(response => {
            const { Tasks, rangeTeeth, isMax } = response.data
            let isMin = true
            if (numberActivate > 5) {
                isMin = false
            }
            Tasks.forEach(function (task, i) {
                let date = Date.parse(task.endDate)
                date = new Date(date)
                date = date.toLocaleString()
                if(date.length==18){
                    date=date.slice(0,15)
                } else {
                    date=date.slice(0,16)
                }
                Tasks[i].endDate = date
            })
            const data = {
                table: {
                    Tasks, rangeTeeth, isMax, isMin, numberActivate
                },
                filter
            }
            dispach(setDataTask(data))
        })
        .catch(error => console.log(error))
}
