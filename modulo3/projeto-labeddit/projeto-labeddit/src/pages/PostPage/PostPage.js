import CardComment from "../../components/CardComment/CardComment"
import { BASE_URL} from "../../constants/urls"
import { useParams } from "react-router-dom"
import useRequestData from "../../hooks/useRequestData"
import { useHistory } from "react-router-dom"
import CardPost from "../../components/CardPost/CardPost"
import useProtectedPage from "../../hooks/useProtectedPage"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"


const PostPage = () => {
    useProtectedPage()
    useUnprotectedPage()
    const history = useHistory()
    const params = useParams()
    const id = params.id
    const [posts, updatePosts] = useRequestData([], `${BASE_URL}/posts`)

    //----- FILTER PARA PEGAR POST CLICADO

    const post = posts.filter((post) => {
        return post.id === id
    }).map((post) => {
        return (
            <CardPost  id={post.id} username={post.username} title={post.title} body = {post.body} voteSum = {post.voteSum} commentCount = {post.commentCount} history={history}/>
        )
    })

    return (
        <div>
            <h1>PostPage</h1>
            {post}
            <CardComment id={id} updatePage={updatePosts} />


        </div>
    )
}

export default PostPage