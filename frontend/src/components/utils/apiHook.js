import { useState } from 'react'
import axios from 'axios'

export default function useApi(time = 4500) {

    const [answer, setAnswer] = useState({})
    const [waitAnswer, setWaitAnswer] = useState(false)
    const [errorRequest, setErrorRequest] = useState(false)

    async function handeldEvent(url = "", method = "get", config = {}, timeout = 10000) {

        if (waitAnswer) {
            return
        }
        setErrorRequest(false)
        const request = { ...config, url, method, timeout }
        setWaitAnswer(true)

        try {
            const response = await axios(request)
            await new Promise(r => setTimeout(r, time));
            let { status, data } = response
            setAnswer({ data, status })
            setWaitAnswer(false)
            return response


        } catch (error) {
            let response
            if (!(error.response == undefined)) {

                let { status, data } = error.response
                response = { status, data }
                setAnswer(response)

            } else {
                response = { data: { errors: "Service Invalide" }, status:503 }
                setAnswer(response)
            }
            await new Promise(r => setTimeout(r, time))
            setErrorRequest(true)
            setWaitAnswer(false)

            throw response
        }
    }
    return [answer, waitAnswer, errorRequest, handeldEvent]
}