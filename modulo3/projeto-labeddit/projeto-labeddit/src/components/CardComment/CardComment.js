import { BASE_URL } from "../../constants/urls"
import { Container, CreateComment } from "./StyledComment"
import useForm from "../../hooks/useForm"
import useRequestData from "../../hooks/useRequestData"
import createComment from "../../services/createComment"


const CardComment = ({id, updatePage}) => {
    const [comments, updateComments] = useRequestData([], `${BASE_URL}/posts/${id}/comments`)
    const { form, onChange, cleanFields } = useForm({
        body: ""
    })

    const onSubmitCreateComment = (event) => {
        event.preventDefault()
        createComment(form,cleanFields,id,updatePage, updateComments)
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
            <CreateComment onSubmit={onSubmitCreateComment}>
                <textarea placeholder="Digite um comentário:" value={form.body} name="body" onChange={onChange} />
                <button>Publicar</button>
            </CreateComment>

        </div>

    )
}

export default CardComment