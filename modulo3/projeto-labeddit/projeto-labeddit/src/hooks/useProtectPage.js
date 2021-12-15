import { useEffect } from "react"
import { token } from "../constants/urls"
import { goToLogin } from "../routes/coordinator"

const useProtect = (history) => {
    useEffect(() => {
        if (token === null) {
            goToLogin(history)
        }
    }, [])
}

export default useProtect