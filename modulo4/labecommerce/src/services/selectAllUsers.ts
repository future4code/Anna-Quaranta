import connection from '../data/connection';
import { User } from './../types';

export const selectAllUsers = async (): Promise<User[]> => {
    const response: User[] = await connection("labecommerce_users")
        .select()
        
    return response
}