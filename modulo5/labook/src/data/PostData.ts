import { Post } from '../model/Post';
import { PostRepository } from './../business/Repository/PostRepository';
import BaseDataBase from "./BaseDataBase";

export default class PostData extends BaseDataBase implements PostRepository {

    private TABLE_NAME = "labook_posts"

    createPost = async (post: Post): Promise<void> => {
        try {
            await PostData
                .connection(this.TABLE_NAME)
                .insert(post)

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    findPostById = async (id: string): Promise<Post[]> => {
        try {
            const posts = await PostData
                .connection(this.TABLE_NAME)
                .where({ id })

            return posts

        } catch (error: any) {
            throw new Error(error)
        }
    }

    getFeed = async (id: string): Promise<any[]> => {

        try {
            const posts = await PostData.connection("labook_friendship")
                .select("labook_posts.id_user", "labook_users.name", "labook_posts.id", "labook_posts.photo", "labook_posts.description", "labook_posts.creationDate", "labook_posts.type")

                .join(this.TABLE_NAME, "labook_posts.id_user", "labook_friendship.id_user2")
                .join("labook_users", "labook_users.id", "labook_posts.id_user")
                .orderBy("labook_posts.creationDate", "desc")
                .where("labook_friendship.id_user1", id)


            return posts
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    searchFeed = async (type: string) => {
        try {
            const posts = await PostData.connection(this.TABLE_NAME)
                .select("labook_posts.id_user", "labook_users.name", "labook_posts.id", "labook_posts.photo", "labook_posts.description", "labook_posts.creationDate", "labook_posts.type")
                .join("labook_users", "labook_users.id", "labook_posts.id_user")
                .orderBy("labook_posts.creationDate", "desc")
                .where("labook_posts.type", type)


            return posts
        } catch (error: any) {
            throw new Error(error.message)
        }
    }


}