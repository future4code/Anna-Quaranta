import { Post } from '../model/Post';
import { PostRepository } from './../business/Repository/PostRepository';
import BaseDataBase from "./BaseDataBase";

export default class PostData extends BaseDataBase implements PostRepository {
    private TABLE_NAME = "labook_posts"

    async createPost(post: Post): Promise<void> {
        try {
            await PostData
                .connection(this.TABLE_NAME)
                .insert(post)

        } catch (error: any) {
            throw new Error(error.message);
        }
    }


    async findPostById(id: string): Promise<Post[]> {
        try {
            const posts: Post[] = await PostData
                .connection(this.TABLE_NAME)
                .where({ id })

            return posts

        } catch (error: any) {
            throw new Error(error)
        }
    }
}