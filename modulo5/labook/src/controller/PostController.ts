import { DTOInputPost } from './../model/Post';
import PostBusiness from "../business/PostBusiness";
import PostData from "../data/PostData";
import { Request, Response } from 'express';
import UserData from '../data/UserData';

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
            res.send(error.message)
        }
    }
}