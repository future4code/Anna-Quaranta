import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";


const signup = async (body, history, cleanFields, setIsLoading) => {
    setIsLoading(true)
    try {
        const response = await axios.post(`${BASE_URL}/users/signup`, body)
        localStorage.setItem("token", response.data.token)
        setIsLoading(false)
        alert(`Seja bem vindo ${body.username}!`)
        goToFeed(history)
    } catch (error) {
        setIsLoading(false)
        alert(error.response.data.message)
        cleanFields()
    }

}

export default signup