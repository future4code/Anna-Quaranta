import { User } from '../Types/User';
import connection from "../data/connection"

export const getUserByEmail = async (email: string): Promise<User | null> => {
    try {
        const result = await connection("User")
            .where("email", email)

        return result[0]

    } catch (error) {
        return null
    }

} 