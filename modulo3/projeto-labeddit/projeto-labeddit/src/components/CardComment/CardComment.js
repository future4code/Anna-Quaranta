import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL, token } from "../../constants/urls"
import { Container } from "./StyledComment"


const CardComment = (props) => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        getPostComments()
    }, [])
    console.log(props.id)

    const getPostComments = async () => {
        try{
            const response = await axios.get(`${BASE_URL}/posts/${props.id}/comments`, {
                headers: {
                    Authorization: token
                }
            })

            setComments(response.data)

        }catch(error){
            alert("Aconteceu um erro")
            console.log(error)
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
            asdaadasa
        </div>

    )
}

export default CardComment