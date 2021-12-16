import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";


const signup = async (body, history, cleanFields) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/signup`, body)
        localStorage.setItem("token", response.data.token)
        alert(`Seja bem vindo ${body.username}!`)
        goToFeed(history)
    } catch (error) {
        alert(error.response.data.message)
        console.log(error.response.data)
        cleanFields()
    }

}

export default signup