import { BASE_URL } from "../../constants/urls"
import useForm from "../../hooks/useForm"
import useRequestData from "../../hooks/useRequestData"
import createPost from "../../services/createPost"
import { Card, Form } from "./StyledCreatePost"


const CreatePost = () => {
    const [posts, atualizarPosts] = useRequestData([], `${BASE_URL}/posts`)
    const { form, onChange, cleanFields } = useForm({
        title: "",
        body: ""
    })

    // REQUISIÇÕES

    const onSubmitCreatePost = (event) => {
        event.preventDefault()
        createPost(form, cleanFields, atualizarPosts)
    }
    return (
        <Card>
            <Form onSubmit={onSubmitCreatePost}>
                <input placeholder="Título da postagem:" name="title" value={form.title} onChange={onChange} />
                <textarea placeholder="Escreva o que você está pensando:" name="body" value={form.body} onChange={onChange} />
                <button>Enviar</button>
            </Form>
        </Card>
    )
}

export default CreatePost