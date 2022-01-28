
import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

type USER = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website?: string
}


const usuario1: USER = {
    id: 1,
    name: "Isabella",
    phone: "21 55555-5555",
    email: "bella@labenu.com",
    website: "abc.com"
}

const usuario2: USER = {
    id: 2,
    name: "Fulano",
    phone: "21 22222-2222",
    email: "fulano@labenu.com",
    website: "aeiou.com"
}

const usuario3: USER = {
    id: 3,
    name: "Ciclano",
    phone: "21 33333-3333",
    email: "ciclano@labenu.com",
    website: "xyz.com"
}

type POSTS = {
    id: number,
    title: string,
    body: string,
    userId: number
}

const post1: POSTS = {
    id: 1,
    title: "Hello API",
    body: "Testando minha API",
    userId: 1
}

const post2: POSTS = {
    id: 2,
    title: "Saudações",
    body: "Eaí monitor, tudo baum?",
    userId: 2
}

const post3: POSTS = {
    id: 3,
    title: "Testando minha API linda",
    body: "Ta tudo certo até agora",
    userId: 3
}

const post4: POSTS = {
    id: 4,
    title: "Testando API do exercicio 8",
    body: "Bateu",
    userId: 3
}


const arrayUsuarios: USER[] = [usuario1, usuario2, usuario3]
const arrayPosts: POSTS[] = [post1, post2, post3, post4]

//NOME DA API POSTMAN : Exercicio de API - Isabella

//ENDPOINT TESTE - EXERCÍCIO 1
app.get("/", (req, res) => {
    res.send("Bateu exercicio1")
})

//ENDPOINT getUser
app.get('/user', (req, res) => {
    res.status(200).send(arrayUsuarios)
})

// ENDPOINT getPosts

app.get('/posts', (req, res) => {
    res.status(200).send(arrayPosts.sort((a, b) => a < b ? 1 : -1))
})

// ENDPOINT getPostsUser
app.get('/posts/:user', (req, res) => {
    const id = +req.params.user

    const postsUsuario = arrayPosts.filter((post) => {
        return post.userId === id
    })

    res.status(200).send(postsUsuario)
})

// ENDPOINT deletePost

app.delete('/deletePost', (req, res) => {
    const id: number = req.body.idPost

    const index: number = arrayPosts.findIndex((post) => post.id === id)

    arrayPosts.splice(index, 1)

    res.status(200).send("Post excluído com sucesso!")
})

//ENDPOINT deleteUser

app.delete('/deleteUser', (req, res) => {
    const id: number = req.body.idUser

    //excluindo usuario
    const index: number = arrayUsuarios.findIndex((user) => user.id === id)
    arrayUsuarios.splice(index, 1)

    //excluindo posts do usuario

    arrayPosts.map((post, index) => {
        if (post.userId === id) {
            arrayPosts.splice(index, 1)
        }
    })

    res.status(200).send("Usuário excluído com sucesso!")
})

//ENDPOINT createUser

app.post('/createUser', (req, res) => {
    const newUser: USER = {
        id: Math.random(),
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        website: req.body.website
    }

    arrayUsuarios.push(newUser)

    res.status(200).send("Usuário criado com sucesso")
})

//ENDPOINT createPost

app.post('/createPost', (req, res) => {

    const newPost: POSTS = {
        id: Math.random(),
        title: req.body.title,
        body: req.body.body,
        userId: req.body.userId
    }

    const index: number = arrayUsuarios.findIndex((user) => user.id === newPost.userId)

    if (index === -1) {
        res.status(400).send("Esse usuário não existe. Tente com um Id existente.")
    } else {
        arrayPosts.push(newPost)
        res.status(200).send("Post criado com sucesso!")
    }
})

