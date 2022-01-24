import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import CardPost from "../../components/CardPost/CardPost"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import Loading from "../Loading/Loading"

const GetPosts = () => {
    const history = useHistory()
    const [posts, atualizarPosts] = useRequestData([], `${BASE_URL}/posts`)

    // MAPS
    const listPosts = posts.map((post) => {
        return (
            <CardPost key={post.id} id={post.id} username={post.username} title={post.title} body={post.body} voteSum={post.voteSum} commentCount={post.commentCount} history={history} />
        )
    })

    return (
        <>
            {listPosts.length > 0 ? listPosts : <Loading />}
        </>
    )
}

export default GetPosts