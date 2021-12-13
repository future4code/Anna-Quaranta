import { useHistory } from "react-router-dom"

const FeedPage = (props) => {
    const history = useHistory()
    return (
        <div>
           FeedPage
           <button onClick={() => props.goTo(history, "/feed")}>FeedPage</button>
           <button onClick={() => props.goTo(history, "/")}>LoginPage</button>
           <button onClick={() => props.goTo(history, "/cadastre")}>CadastrePage</button>
           <button onClick={() => props.goTo(history, "/post")}>PostPage</button>
        </div>
    )
}

export default FeedPage