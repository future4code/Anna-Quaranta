import { Card, Header, Footer, Likes, Comments} from "../pages/FeedPage/StyledFeed"
import like from "../assets/images/like.svg"
import dislike from "../assets/images/dislike.svg"
import { goToPost } from "../routes/coordinator"

const CardPost = ({id, username, title, body, voteSum, commentCount, history}) => {

    return (
        <Card key={id} onClick={() => goToPost(history, id)}>
                <Header>
                    {username}
                </Header>
                <div>
                    <h3>{title}</h3>
                    {body}
                </div>
                <Footer>
                    <Likes>
                        <img src={like} alt="like" />

                        {voteSum}

                        <img src={dislike} alt="dislike"/>
                    </Likes>
                    <Comments>
                        {commentCount > 0 ? <p>{commentCount}</p> : <p>0</p>} comentários
                    </Comments>

                </Footer>
            </Card>
    )
}

export default CardPost