import { Container, ContainerTop } from "./StyledFeed"
import GetPosts from "../../components/GetPosts/GetPosts"
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { MyInput } from "./StyledFeed";
import { goToCreatePost } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const FeedPage = () => {
    const history = useHistory()

    return (
        <Container>
            {/* <CreatePost/> */}
            <ContainerTop>
                <AccountCircleRoundedIcon style={{ fontSize: 40 }} />
                <MyInput placeholder="Postar" variant="filled" onClick={() => goToCreatePost(history)} />
            </ContainerTop>
            <GetPosts />
        </Container>
    )
}

export default FeedPage