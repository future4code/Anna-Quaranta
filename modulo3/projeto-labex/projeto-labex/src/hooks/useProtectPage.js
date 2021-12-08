import { useEffect } from "react"

export const useProtectPage = (history, path) => {

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null){
            history.push(path)
        }
    }, [])

}