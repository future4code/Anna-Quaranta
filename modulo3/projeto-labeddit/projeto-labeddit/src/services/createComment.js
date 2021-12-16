import axios from "axios"
import { BASE_URL, TOKEN } from "../constants/urls"


const createComment = async (body, cleanFields, id, updatePage, updateComments) => {
    try {
        const response = await axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
            headers: {
                Authorization: TOKEN
            }
        })
        
        alert("Comentário postado!")
        cleanFields()
        updatePage()
        updateComments()

    } catch (error) {
        alert("Ocorreu um erro! Tente novamente!")
        console.log(error.response)

    }
}

export default createComment