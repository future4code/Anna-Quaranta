import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { Card, Form} from "./StyledFeed"
import { BASE_URL } from "../../constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import createPost from "../../services/createPost"
import CardPost from "../../components/CardPost"

const FeedPage = () => {
    const history = useHistory()
    useProtectedPage()
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
    

    // MAPS
    const listPosts = posts.map((post) => {
        return (
            <CardPost  id={post.id} username={post.username} title={post.title} body = {post.body} voteSum = {post.voteSum} commentCount = {post.commentCount} history={history}/>
        )
    })

    return (
        <div>
            <h1>FeedPage</h1>
            <Card>
                <Form onSubmit={onSubmitCreatePost}>
                    <input placeholder="Título da postagem:" name="title" value={form.title} onChange={onChange} />
                    <textarea placeholder="Escreva o que você está pensando:" name="body" value={form.body} onChange={onChange} />
                    <button>Enviar</button>
                </Form>

            </Card>
            {listPosts}


        </div>
    )
}

export default FeedPage