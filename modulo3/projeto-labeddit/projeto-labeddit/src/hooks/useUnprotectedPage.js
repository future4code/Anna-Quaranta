import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { TOKEN } from "../constants/urls"
import { goToFeed } from "../routes/coordinator"

const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        if (TOKEN) {
            goToFeed(history)
        }
    }, [history])
}

export default useUnprotectedPage