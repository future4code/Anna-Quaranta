import CreatePost from "../../components/CreatePost/CreatePost"
import { Central, Container } from "./StyledCreatePostPage"
import useProtectedPage from "../../hooks/useProtectedPage"
import { useHistory } from "react-router-dom"

const CreatePostPage = () => {

    const history = useHistory()
    useProtectedPage(history)
    
    return (
        <Container>
            <Central>
                <CreatePost />
            </Central>
        </Container>
    )
}

export default CreatePostPage