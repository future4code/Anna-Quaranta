import { Card, Header, Footer, Likes, Comments } from "../FeedPage/StyledFeed"
import { CreateComment } from "./StyledPost"
import like from "../../assets/images/like.svg"
import dislike from "../../assets/images/dislike.svg"
import CardComment from "../../components/CardComment/CardComment"
import { BASE_URL, token } from "../../constants/urls"
import { useParams } from "react-router-dom"
import axios from "axios"
import useForm from "../../hooks/useForm"

const PostPage = (props) => {
    const params = useParams()
    const { form, onChange, cleanFields} = useForm({
        body: ""
    })

    const id = params.id

    const createComment = async () => {
        try{
            const response = await axios.post(`${BASE_URL}/posts/${id}/comments`, form, {
                headers: {
                    Authorization: token
                }
            })
            alert("Comentário criado!")
            console.log(response)
            cleanFields()

        }catch (error) {
            alert("Aconteceu um erro!")
            console.log(error.response)
        }
    }
    return (
        <div>
            <h1>PostPage</h1>
            <Card>
                <Header>
                    Nome de usuario
                </Header>
                <div>
                    <h3>Titulo da postagem</h3>
                    Texto da postagem
                </div>
                <Footer>
                    <Likes>
                        <img src={like} alt="like" />

                        count

                        <img src={dislike} alt="dislike" />
                    </Likes>
                    <Comments>
                        count comentários
                    </Comments>
                </Footer>
            </Card>
            <CardComment id={id}/>
            <CreateComment onSubmit={createComment}>
                <textarea placeholder="Digite um comentário:" value={form.body} name="body" onChange={onChange}/>
                <button>Publicar</button>
            </CreateComment>
            
        </div>
    )
}

export default PostPage