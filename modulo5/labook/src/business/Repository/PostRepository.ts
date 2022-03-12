import { Post } from "../../model/Post"

export interface PostRepository {
    createPost(post: Post): Promise<void>
    findPostById(id: string): Promise<Post[]>
}