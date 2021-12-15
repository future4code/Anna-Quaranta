import { Card, Header, Footer, Likes, Comments } from "../FeedPage/StyledFeed"
import { CreateComment } from "./StyledPost"
import like from "../../assets/images/like.svg"
import dislike from "../../assets/images/dislike.svg"
import CardComment from "../../components/CardComment/CardComment"
import { BASE_URL, token } from "../../constants/urls"
import { useParams } from "react-router-dom"
import axios from "axios"
import useForm from "../../hooks/useForm"
import { useEffect, useState } from "react"

const PostPage = (props) => {
    const params = useParams()
    const id = params.id
    const { form, onChange, cleanFields } = useForm({
        body: ""
    })
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        getPosts()
    }, [])

    const getPosts = async () => {
        try{
            const response = await axios.get(`${BASE_URL}/posts`, {
                headers: {
                    Authorization: token
                }
            })
            setPosts(response.data)

        }catch(error){
            alert("Aconteceu um erro!")
            console.log(error)
        }
    }


    const createComment = async () => {
        try{
            const response = await axios.post(`${BASE_URL}/posts/${id}/comments`, form, {
                headers: {
                    Authorization: token
                }
            })
            alert("Comentário postado com sucesso!")
            console.log(response)
        }catch(error){
            alert("Aconteceu um erro!")
            console.log(error)
        }
    }

    const postEscolhido = posts.filter((post) => {
        return post.id === id
    }).map((post) => {
        return(
            <Card key={post.id}>
                <Header>
                    <p>{post.username}</p>
                </Header>
                <div>
                    <h3>{post.title}</h3>
                    {post.body}
                </div>
                <Footer>
                    <Likes>
                        <img src={like} alt="like" />

                        {post.voteSum}

                        <img src={dislike} alt="dislike" />
                    </Likes>
                    <Comments>
                        {post.commentCount} comentários
                    </Comments>
                </Footer>
            </Card>
        )
    })

    return (
        <div>
            <h1>PostPage</h1>
            {postEscolhido}
            <CreateComment onSubmit={createComment}>
                <textarea placeholder="Digite um comentário:" value={form.body} name="body" onChange={onChange} />
                <button>Publicar</button>
            </CreateComment>
            <CardComment/>

        </div>
    )
}

export default PostPage