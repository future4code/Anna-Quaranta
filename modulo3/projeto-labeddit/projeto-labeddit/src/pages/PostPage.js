import { useHistory } from "react-router-dom"

const PostPage = (props) => {
    const history = useHistory()
    return (
        <div>
           PostPage
           <button onClick={() => props.goTo(history, "/feed")}>FeedPage</button>
           <button onClick={() => props.goTo(history, "/")}>LoginPage</button>
           <button onClick={() => props.goTo(history, "/cadastre")}>CadastrePage</button>
           <button onClick={() => props.goTo(history, "/post")}>PostPage</button>
        </div>
    )
}

export default PostPage