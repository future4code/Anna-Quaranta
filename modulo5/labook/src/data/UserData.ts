import { User } from './../model/User';
import { UserRepository } from '../business/Repository/UserRepository';
import BaseDataBase from './BaseDataBase';

export default class UserData extends BaseDataBase implements UserRepository {

    protected TABLE_NAME = "labook_users"

    createUser = async (user: User): Promise<void> => {
        try {
            await BaseDataBase
                .connection(this.TABLE_NAME)
                .insert(user)
        } catch (error: any) {
            throw new Error(error)
        }
    }

    findByEmail = async (email: string): Promise<User[]> => {
        try {
            const users: User[] = await BaseDataBase
                .connection(this.TABLE_NAME)
                .where("email", email)

            return users

        } catch (error: any) {
            throw new Error(error)
        }
    }

}