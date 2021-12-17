import { Container} from "./StyledFeed"
import useProtectedPage from "../../hooks/useProtectedPage"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import CreatePost from "../../components/CreatePost/CreatePost"
import GetPosts from "../../components/GetPosts/GetPosts"


const FeedPage = () => {
    // useProtectedPage()
    // useUnprotectedPage()
  
    
    return (
        <Container>
            <CreatePost/>
            <GetPosts/>
        </Container>
    )
}

export default FeedPage