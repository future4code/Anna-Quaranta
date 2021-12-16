import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { TOKEN } from "../constants/urls"
import { goToLogin } from "../routes/coordinator"

const useProtectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        if (!TOKEN) {
            goToLogin(history)
        }
    }, [history])
}

export default useProtectedPage