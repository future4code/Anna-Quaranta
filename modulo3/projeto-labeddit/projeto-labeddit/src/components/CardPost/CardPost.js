import like from "../../assets/images/like.svg"
import dislike  from "../../assets/images/dislike.svg"
import perfile  from "../../assets/images/perfile.svg"
import { goToPost } from "../../routes/coordinator"
import { Body, Card, Comments, Footer, Header, Likes } from "./StyledCardPost"
import { InsertComment } from "@material-ui/icons"

const CardPost = ({ id, username, title, body, voteSum, commentCount, history }) => {
    return (
        <Card key={id} onClick={() => goToPost(history, id)}>
            <Header>
                <img src={perfile} alt="Icone de perfil"/>
                <p>{username}</p>
            </Header>
            <Body>
                <h3>{title}</h3>
                <p>{body}</p>
            </Body>
            <Footer>
                <Likes>
                    <img src={like} alt="like" />


                    {voteSum > 0 ? <p>{voteSum}</p> : <p>0</p>}

                    <img src={dislike} alt="dislike" />
                </Likes>
                <Comments>
                    {commentCount > 0 ? <p>{commentCount}</p> : <p>0</p>}
                    <InsertComment/>
                </Comments>

            </Footer>
        </Card>
    )
}

export default CardPost