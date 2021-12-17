import axios from "axios"
import { BASE_URL, TOKEN } from "../constants/urls"


const createPost = async (body, cleanFields, atualizarPosts, setIsLoading) => {
    setIsLoading(true)
    try {
        const response = await axios.post(`${BASE_URL}/posts`, body, {
            headers: {
                Authorization: TOKEN
            }
        })
        setIsLoading(false)
        atualizarPosts()
        alert("Post criado com sucesso!")
        cleanFields()
    } catch (error) {
        setIsLoading(false)
        alert(error.response.data.message)
    }
}

export default createPost