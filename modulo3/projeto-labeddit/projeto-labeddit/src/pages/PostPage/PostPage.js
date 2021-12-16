import { Card, Header, Footer, Likes, Comments } from "../FeedPage/StyledFeed"
import like from "../../assets/images/like.svg"
import dislike from "../../assets/images/dislike.svg"
import CardComment from "../../components/CardComment/CardComment"
import { BASE_URL, token } from "../../constants/urls"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const PostPage = (props) => {
    const params = useParams()
    const id = params.id
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/posts`, {
                headers: {
                    Authorization: token
                }
            })
            setPosts(response.data)

        } catch (error) {
            alert("Aconteceu um erro!")
            console.log(error)
        }
    }

    const postEscolhido = posts.filter((post) => {
        return post.id === id
    }).map((post) => {
        return (
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
                        {post.commentCount > 0 ? <p>{post.commentCount} comentários</p> : <p>0 comentários</p>}
                    </Comments>
                </Footer>
            </Card>
        )
    })

    return (
        <div>
            <h1>PostPage</h1>
            {postEscolhido}
            <CardComment id={id} atualizarPagina={getPosts} />


        </div>
    )
}

export default PostPage