import express from 'express';
import PostController from '../controller/PostController';

export const postRouter = express.Router()

const postController = new PostController()

postRouter.post("/new", postController.createPost)
postRouter.get("/feed", postController.getFeed)
postRouter.get("/feed/search", postController.searchFeed)
postRouter.get("/:id", postController.findPostById)