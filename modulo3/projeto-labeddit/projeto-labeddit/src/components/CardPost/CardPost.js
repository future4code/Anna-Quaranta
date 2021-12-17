import { Footer } from "../../pages/FeedPage/StyledFeed";
import { goToPost } from "../../routes/coordinator";
import { Card, Comments, Header, Likes } from "./StyledCardPost";
import like from "../../assets/images/like.svg"
import dislike from "../../assets/images/dislike.svg"


const CardPost = ({ id, username, title, body, voteSum, commentCount, history }) => {
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
        //         <Likes>
        //             <img src={like} alt="like" />
                    

        //             {voteSum > 0 ? <p>{voteSum}</p> : <p>0</p>}

        //             <img src={dislike} alt="dislike" />
        //         </Likes>
                <Comments>
                    {commentCount > 0 ? <p>{commentCount} comentários</p> : <p>0 comentários</p>}
                </Comments>

            </Footer>
        </Card>
    )
}

export default CardPost