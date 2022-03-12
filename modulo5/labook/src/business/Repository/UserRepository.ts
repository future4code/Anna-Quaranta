import { Friendship } from './../../model/User';
import { User } from "../../model/User";

export interface UserRepository {
    createUser(user: User): Promise<void>
    findBy(email: string, id: string): Promise<User[]>
    createFriendship(friendship: Friendship): Promise<void>
    findFriendship(id_user1: string, id_user2: string): Promise<Friendship[]>
    deleteFriendship(id_user1: string, id_user2: string): Promise<void>
}