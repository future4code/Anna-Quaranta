import { Post } from "../../model/Post"

export interface PostRepository {
    createPost(post: Post): Promise<void>
    findPostById(id: string): Promise<Post[]>
    getFeed(id: string): Promise<any[]>
    searchFeed(type: string): Promise<any[]>
}