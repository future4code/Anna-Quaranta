import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestDataGet = (url) => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        axios.get(url)
        .then((res) => setData(res.data))
        .catch((error) => console.log(error))
    }, [url])

    return data
}