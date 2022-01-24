import { useLayoutEffect } from "react"
import { TOKEN } from "../constants/urls"
import { goToLogin } from "../routes/coordinator"

const useProtectedPage = (history) => {
    useLayoutEffect(() => {
        if (!TOKEN) {
            goToLogin(history)
        }
    }, [])
}

export default useProtectedPage