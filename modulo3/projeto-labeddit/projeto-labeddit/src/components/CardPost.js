import { Card, Header, Footer, Likes, Comments} from "../pages/FeedPage/StyledFeed"
import like from "../assets/images/like.svg"
import dislike from "../assets/images/dislike.svg"
import axios from "axios"
import { BASE_URL } from "../constants/urls"

const CardPost = (props) => {
    const toVote = async () => {
        try{
            const response = await axios.post(`${BASE_URL}/posts/${props.idPost}/votes`)
        }catch (error) {

        }
    }

    return (
        <Card>
            <Header>
                {props.username}
            </Header>
            <div>
                <h3>{props.title}</h3>
                {props.body}
            </div>
            <Footer>
                <Likes>
                    <img src={like} alt="like" />
                    {props.likeCount === 0 ? props.likeCount : <p>0</p>}
                    <img src={dislike} alt="dislike" />
                </Likes>
                <Comments>
                    {props.commentCount === 0 ? props.commentCount : <p>0</p>} comentários
                </Comments>

            </Footer>
        </Card>
    )
}

export default CardPost