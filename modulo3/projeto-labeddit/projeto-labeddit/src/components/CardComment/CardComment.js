import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL, token } from "../../constants/urls"
import { Container } from "./StyledComment"


const CardComment = (props) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getPostComments()
    }, [])

    const getPostComments = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/posts/${props.id}/comments`, {
                headers: {
                    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZmMGNhMTBhLWQ4NTItNGM2NS1hYjRjLTRhZWUyNDRhMmE5YyIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTYzOTUyMTgyMCwiZXhwIjoxNjM5NTY1MDIwfQ.AtUp-tZGPEEo3INnD8tucGlKseHjdimnNAAoLNvL94M"
                }
            })

            console.log(response.data)
        } catch (error) {

        }
    }

    const listComments = comments.map((comment) => {
        return (
            <Container>
                <b>nomeDoUsuario</b>
                <p>texto</p>
            </Container>
        )

    })
    return (
        <div>
            {listComments}
        </div>

    )
}

export default CardComment