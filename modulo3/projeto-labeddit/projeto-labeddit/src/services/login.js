import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";

const login = async (body, cleanFields, history) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/login`, body)
        localStorage.setItem("token", response.data.token)
        goToFeed(history)

    } catch (error){
        alert("Usuário não encontrado. Email ou senha inválido!")
        cleanFields()
    }
}

export default login