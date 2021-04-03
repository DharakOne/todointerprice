import  { useState } from 'react'
import axios from 'axios'

export default function useApi(time = 4500) {
    
    const [answer, setAnswer] = useState({})
    const [waitAnswer, setWaitAnswer] = useState(false)
    const [errorRequest,setErrorRequest]=useState(false)

    async function handeldEvent(url="", method = "get",  config = {},timeout=10000) {
        if (waitAnswer) {
            return
        }
        setErrorRequest(false)
        const request = { ...config, url, method,timeout }
        setWaitAnswer(true)
        try {
            const response = await axios(request)
            await new Promise(r => setTimeout(r, time));
            setAnswer({data: response.data ,status:response.status})
        } catch (error) {

            if (error.response.data) {
                let {status,data} =error.response
                setAnswer({data,status})

            }else{
                let data={errors:[["Service Invalide"]]}
                let status=503
                setAnswer({status,data})
            }
            await new Promise(r => setTimeout(r, time))
            setErrorRequest(true)
        } 
        setWaitAnswer(false)
    }
    return [answer, waitAnswer,errorRequest, handeldEvent]
}