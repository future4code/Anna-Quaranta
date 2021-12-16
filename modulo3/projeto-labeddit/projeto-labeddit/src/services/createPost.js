import axios from "axios"
import { BASE_URL, TOKEN } from "../constants/urls"


const createPost = async (body, cleanFields, atualizarPosts) => {
    try {
        const response = await axios.post(`${BASE_URL}/posts`, body, {
            headers: {
                Authorization: TOKEN
            }
        })

        alert("Post criado com sucesso!")
        atualizarPosts()
        cleanFields()
    } catch (error) {
        alert("Aconteceu um erro!")
        console.log(error.response)
    }
}

export default createPost