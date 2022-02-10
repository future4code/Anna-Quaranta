import { User } from './../types';
import connection from "../data/connection"

export const sendUser = async (user: User): Promise<void> => {
    await connection("labecommerce_users")
        .insert(user)
}