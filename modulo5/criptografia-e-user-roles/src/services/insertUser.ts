import { ROLE } from './../Types/AuthenticationData';
import connection from "../data/connection"

export const insertUser = async (id: string, email: string, password: string, role: ROLE): Promise<void | null> => {
    try {
        await connection("User")
            .insert({
                id,
                email,
                password,
                role
            })
    } catch (error) {
        console.log(error)

        return null
    }
} 