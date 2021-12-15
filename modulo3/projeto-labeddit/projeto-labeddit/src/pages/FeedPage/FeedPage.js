import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
// import CardPost from "../../components/CardPost"
import { BASE_URL, token } from '../../constants/urls'
import useForm from "../../hooks/useForm"
import useProtect from "../../hooks/useProtectPage"
import { Card, Form, Header, Footer, Likes, Comments } from "./StyledFeed"
import like from "../../assets/images/like.svg"
import dislike from "../../assets/images/dislike.svg"
import { goToPost } from "../../routes/coordinator"

const FeedPage = (props) => {
    const history = useHistory()
    useProtect(history)
    const [posts, setPosts] = useState([])
    const { form, onChange, cleanFields } = useForm({
        title: "",
        body: ""
    })
    useEffect(() => {
        getPosts()
    }, [])

    // REQUISIÇÕES

    const getPosts = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/posts/`, {
                headers: {
                    Authorization: token
                }
            })
            console.log(response.data)
            setPosts(response.data)
        } catch (error) {
            alert("Aconteceu um erro!")
            console.log(error.response)
        }
    }

    const createPost = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(`${BASE_URL}/posts`, form, {
                headers: {
                    Authorization: token
                }
            })

            alert("Post criado com sucesso!")
            getPosts()
            cleanFields()
        } catch (error) {
            alert("Aconteceu um erro!")
            console.log(error.response)
        }
    }

    const toVote = async (id, direction) => {


        const body = {
            direction: direction
        }

        try {
            const response = await axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
                headers: {
                    Authorization: token
                }
            })

            console.log(response)
            getPosts()

        } catch (error) {
            alert("Aconteceu um erro!")
            console.log(error.response)
        }
    }


    // ------------------------------------- 
    const listPosts = posts.map((post) => {
        return (
            <Card key={post.id} onClick={() => goToPost(history, post.id)}>
                <Header>
                    {post.username}
                </Header>
                <div>
                    <h3>{post.title}</h3>
                    {post.body}
                </div>
                <Footer>
                    <Likes>
                        <img src={like} alt="like" onClick={() => toVote(post.id, 1)} />

                        {post.voteSum}

                        <img src={dislike} alt="dislike" onClick={() => toVote(post.id, -1)} />
                    </Likes>
                    <Comments>
                        {post.commentCount === 0 ? post.commentCount : <p>0</p>} comentários
                    </Comments>

                </Footer>
            </Card>
        )
    })

    return (
        <div>
            <h1>FeedPage</h1>
            <Card>
                <Form onSubmit={createPost}>
                    <input placeholder="Título da postagem:" name="title" value={form.title} onChange={onChange} />
                    <textarea placeholder="Escreva o que você está pensando:" name="body" value={form.body} onChange={onChange} />
                    <button>Enviar</button>
                </Form>

            </Card>
            {listPosts}


        </div>
    )
}

export default FeedPage