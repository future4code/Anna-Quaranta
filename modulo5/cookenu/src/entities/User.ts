import { BaseDataBase } from "../data/BaseDataBase";

export class User extends BaseDataBase {
    constructor(
        protected email: string,
        protected password: string) {
        super()
    }

    public static async getUser(id: string, email: string) {
        try {
            const users = await BaseDataBase.connection("cookenu_users")
                .where({ email })
                .orWhere({ id })
            return users
        } catch (error: any) {
            throw new Error(error.sql || error.message)
        }
    }

    public static async followUser(id: string, id_userFollowing: string, id_userFollowed: string) {
        try {
            await User.connection("cookenu_followers")
                .insert({
                    id,
                    id_userFollowing,
                    id_userFollowed
                })
        } catch (error: any) {
            throw new Error(error.sql || error.message)
        }
    }

    public static async unfollowUser(id_userFollowing: string, id_userFollowed: string, deleteUser?: string) {
        try {
            //caso seja para deletar o usuário
            if (deleteUser) {
                return await User.connection("cookenu_followers")
                    .delete()
                    .where({ id_userFollowing })
                    .orWhere({ id_userFollowed })
            }

            return await User.connection("cookenu_followers")
                .delete()
                .where({ id_userFollowing })
                .andWhere({ id_userFollowed })
        } catch (error: any) {
            throw new Error(error.sql || error.message)
        }
    }

    public static async deleteUser(id: string) {
        try {
            return await User.connection("cookenu_users")
                .delete()
                .where({ id })

        } catch (error: any) {
            throw new Error(error.sql || error.message)
        }
    }

    public static async updateUser(id: string, password: string) {
        try {
            await User.connection("cookenu_users")
                .insert({ password })
                .where({ id })

        } catch (error: any) {
            throw new Error(error.sql || error.message)
        }
    }
}