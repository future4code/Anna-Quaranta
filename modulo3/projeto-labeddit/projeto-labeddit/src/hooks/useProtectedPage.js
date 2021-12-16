import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { token } from "../constants/urls"
import { goToLogin } from "../routes/coordinator"

const useProtectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        if (!token) {
            goToLogin(history)
        }
    }, [history])
}

export default useProtectedPage