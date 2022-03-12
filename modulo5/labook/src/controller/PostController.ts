import { DTOInputPost, Post } from './../model/Post';
import PostBusiness from "../business/PostBusiness";
import PostData from "../data/PostData";
import { Request, Response } from 'express';

export default class PostController {
    private postBusiness: PostBusiness

    constructor() {
        this.postBusiness = new PostBusiness(new PostData())
    }

    createPost = async (req: Request, res: Response) => {

        const input: DTOInputPost = {
            token: req.headers.authorization,
            photo: req.body.photo,
            description: req.body.description,
            type: req.body.type || "NORMAL"
        }

        try {
            const post = await this.postBusiness.createPost(input)

            res.status(201).send({
                message: "Post criado com sucesso.",
                post
            })
        } catch (error: any) {
            res.status(500)
            res.send(error.message)
        }
    }

    findPostById = async (req: Request, res: Response) => {
        const token = req.headers.authorization
        const id = req.params.id

        try {
            const post = await this.postBusiness.findPostById(token, id)

            res.status(200).send(post)

        } catch (error: any) {
            res.status(500)
            res.send(error.message)
        }
    }

    getFeed = async (req: Request, res: Response) => {
        const token = req.headers.authorization

        try {
            const feed: Post[] = await this.postBusiness.getFeed(token)

            res.status(200).send({
                feed: feed.length ? feed : "Seu feed está vazio. Faça amizades para ver postagens."
            })

        } catch (error: any) {
            res.status(500)
            res.send(error)
        }
    }

    searchFeed = async (req: Request, res: Response) => {
        const token = req.headers.authorization
        const type = req.query.type as string || "NORMAL"

        try {
            const feed = await this.postBusiness.searchFeed(token, type)

            res.status(200).send(feed)

        } catch (error: any) {
            res.status(500)
            res.send(error.message)
        }
    }
}