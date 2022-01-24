import { BASE_URL} from "../../constants/urls"
import { useParams } from "react-router-dom"
import useRequestData from "../../hooks/useRequestData"
import PostDetail from "../../components/CardPostDetail/PostDetail"
import { Container } from "./StyledPost"
import Loading from "../../components/Loading/Loading"
import useProtectPage from "../../hooks/useProtectedPage"
import { useHistory } from "react-router-dom"

const PostPage = () => {
    const history = useHistory()
    const params = useParams()
    const id = params.id
    useProtectPage(history)
    const [posts, updatePosts] = useRequestData([], `${BASE_URL}/posts`)
    

    //----- FILTER PARA PEGAR POST CLICADO

    const post = posts.filter((post) => {
        return post.id === id
    }).map((post) => {
        return (
            <PostDetail  id={post.id} username={post.username} title={post.title} body = {post.body} voteSum = {post.voteSum} commentCount = {post.commentCount} updatePosts={updatePosts}/>
        )
    })

    return (
        <Container>
            {post.length > 0 ? post : <Loading/>}
        </Container>
    )
}

export default PostPage