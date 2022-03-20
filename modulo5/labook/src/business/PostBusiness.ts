import { TokenGenerator } from './../services/TokenGenerator';
import { DTOInputPost, Post } from './../model/Post';
import { IdGenerator } from './../services/IdGenerator';
import { PostRepository } from './Repository/PostRepository';
export default class PostBusiness {

    private postData: PostRepository
    private IdGenerator: string
    private creationDate: number

    constructor(implementationPostData: PostRepository) {

        this.postData = implementationPostData
        this.IdGenerator = IdGenerator.generate()
        this.creationDate = Date.now()

    }

    createPost = async (input: DTOInputPost) => {

        const { token, photo, description, type } = input

        if (!token) {
            throw new Error("Token inexistente ou inválido.")
        }

        if (!photo || !description || !type) {
            throw new Error("Verifique se 'photo', 'description' estão preenchidos.")
        }

        const checkToken = TokenGenerator.verifyToken(token)

        if (!checkToken) {
            throw new Error("Token inexistente ou inválido.")
        }

        const post: Post = {
            id: this.IdGenerator,
            photo,
            description,
            creationDate: this.creationDate,
            type,
            id_user: checkToken.id
        }

        await this.postData.createPost(post)

        return post
    }

    findPostById = async (token: string | undefined, id: string) => {
        try {

            if (!token || !id) {
                throw new Error("Verifique se o header 'authorization' e o params 'id' foram enviados.")
            }

            const checkToken = TokenGenerator.verifyToken(token)

            if (!checkToken) {
                throw new Error("Token inexistente ou inválido.")
            }

            const [post]: Post[] = await this.postData.findPostById(id)

            if (!post) {
                throw new Error("Postagem não encontrada.")
            }

            post.creationDate = new Date(post.creationDate).toLocaleString()

            return post

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    getFeed = async (token: string | undefined) => {

        if (!token) {
            throw new Error("Token inexistente ou inválido.")
        }

        const checkToken = TokenGenerator.verifyToken(token)

        if (!checkToken) {
            throw new Error("Token inexistente ou inválido.")
        }

        const feed = await this.postData.getFeed(checkToken.id)

        feed.forEach((post) => {
            post.creationDate = new Date(post.creationDate).toLocaleString()
        })

        return feed
    }

    searchFeed = async (token: string | undefined, type: string) => {

        if (!token || !type) {
            throw new Error("Verifique se o header 'authorization' e o query 'type' foram enviados.")
        }

        const checkToken = TokenGenerator.verifyToken(token)

        if (!checkToken) {
            throw new Error("Token inexistente ou inválido.")
        }

        const feed: Post[] = await this.postData.searchFeed(type)

        feed.forEach((post) => {
            post.creationDate = new Date(post.creationDate).toLocaleString()
        })

        return feed

    }
}