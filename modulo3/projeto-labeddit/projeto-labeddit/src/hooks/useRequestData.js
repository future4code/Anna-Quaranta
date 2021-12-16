import axios from "axios"
import { useEffect, useState } from "react"
import { TOKEN } from "../constants/urls"

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        requestGet()
    }, [url])

    const requestGet = async () => {
        axios.get(url, {
            headers: {
                Authorization: TOKEN
            }
        }).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
            alert("Ocorreu um erro, tente novamente!")
        })
    }

    return [data, requestGet]
}

export default useRequestData