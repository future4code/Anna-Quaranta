import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";

const login = async (body, cleanFields, history, setIsLoading) => {
    setIsLoading(true)
    try {
        const response = await axios.post(`${BASE_URL}/users/login`, body)
        localStorage.setItem("token", response.data.token)
        setIsLoading(false)
        goToFeed(history)

    } catch (error){
        alert(error.response.data.message)
        setIsLoading(false)
        cleanFields()
    }
}

export default login