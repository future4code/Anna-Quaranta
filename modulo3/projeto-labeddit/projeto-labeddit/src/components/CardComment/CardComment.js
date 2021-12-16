import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL, token } from "../../constants/urls"
import { Container, CreateComment } from "./StyledComment"
import useForm from "../../hooks/useForm"


const CardComment = (props) => {
    const [comments, setComments] = useState([])
    const { form, onChange, cleanFields } = useForm({
        body: ""
    })


    useEffect(() => {
        getPostComments()
    }, [])

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

    const createComment = async (event) => {
        event.preventDefault()
        try{
            const response = await axios.post(`${BASE_URL}/posts/${props.id}/comments`, form, {
                headers: {
                    Authorization: token
                }
            })
            
            alert("Comentário postado!")
            cleanFields()
            props.atualizarPagina()
            getPostComments()
            
        }catch (error){

        }
    }


    const listComments = comments.map((comment) => {
        return (
            <Container key={comment.id}>
                <b>{comment.username}</b>
                <p>{comment.body}</p>
            </Container>
        )

    })

    return (
        <div>
            {listComments}
            <CreateComment onSubmit={createComment}>
                <textarea placeholder="Digite um comentário:" value={form.body} name="body" onChange={onChange} />
                <button>Publicar</button>
            </CreateComment>

        </div>

    )
}

export default CardComment