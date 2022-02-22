import { User } from '../Types/User';
import connection from "../data/connection"

export const getUserById = async (id: string): Promise<User | null> => {
    try {
        const result = await connection("User")
            .where("id", id)

        return result[0]

    } catch (error) {
        return null
    }

}