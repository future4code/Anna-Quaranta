import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { token } from "../constants/urls"
import { goToFeed } from "../routes/coordinator"

const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        if (token) {
            goToFeed(history)
        }
    }, [history])
}

export default useUnprotectedPage