import { Button, CircularProgress } from "@material-ui/core"
import { BASE_URL } from "../../constants/urls"
import useForm from "../../hooks/useForm"
import useRequestData from "../../hooks/useRequestData"
import createPost from "../../services/createPost"
import { Form } from "./StyledCreatePost"
import post from "../../assets/images/post.svg"
import { useState } from "react"

const CreatePost = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [posts, atualizarPosts] = useRequestData([], `${BASE_URL}/posts`)
    const { form, onChange, cleanFields } = useForm({
        title: "",
        body: ""
    })

    // REQUISIÇÕES

    const onSubmitCreatePost = (event) => {
        event.preventDefault()
        createPost(form, cleanFields, atualizarPosts, setIsLoading)
    }
    return (
        <Form onSubmit={onSubmitCreatePost}>
            <img src={post} alt="Imagem de uma garota adicionando um post no mural" />
            <h2>Criar Post</h2>
            <input placeholder="Título da postagem:" name="title" value={form.title} onChange={onChange} fullWidth />
            <textarea placeholder="No que você está pensando?" name="body" value={form.body} onChange={onChange} />
            <Button variant="contained" color={"primary"} type="submit">{isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Postar</>}</Button>
        </Form>
    )
}

export default CreatePost