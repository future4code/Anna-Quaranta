import { User, Friendship } from './../model/User';
import { UserRepository } from '../business/Repository/UserRepository';
import BaseDataBase from './BaseDataBase';

export default class UserData extends BaseDataBase implements UserRepository {


    createUser = async (user: User): Promise<void> => {
        try {
            await UserData
                .connection("labook_users")
                .insert(user)
        } catch (error: any) {
            throw new Error(error)
        }
    }

    findBy = async (email: string, id: string): Promise<User[]> => {
        try {
            const users: User[] = await UserData
                .connection("labook_users")
                .where("email", "LIKE", email)
                .andWhere("id", "LIKE", id)

            return users

        } catch (error: any) {
            throw new Error(error)
        }
    }

    createFriendship = async (friendship: Friendship): Promise<void> => {
        await UserData.connection("labook_friendship")
            .insert(friendship)
    }

    findFriendship = async (id_user1: string, id_user2: string): Promise<Friendship[]> => {
        const friendships: Friendship[] = await UserData.connection("labook_friendship")
            .where({ id_user1 })
            .andWhere({ id_user2 })

        return friendships
    }

    deleteFriendship = async (id_user1: string, id_user2: string): Promise<void> => {

        await UserData.connection("labook_friendship")
            .where({ id_user1 })
            .andWhere({ id_user2 })
            .del()
    }

}