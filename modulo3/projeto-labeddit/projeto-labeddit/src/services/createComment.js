import axios from "axios"
import { BASE_URL, TOKEN } from "../constants/urls"


const createComment = async (body, cleanFields, id, updatePage, updateComments) => {
    try {
        const response = await axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
            headers: {
                Authorization: TOKEN
            }
        })
        
        updatePage()
        updateComments()
        alert("Comentário postado!")
        cleanFields()
    
    } catch (error) {
        alert(error.response.data.message)
    }
}

export default createComment