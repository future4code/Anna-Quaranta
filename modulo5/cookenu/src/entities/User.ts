import { BaseDataBase } from "../data/BaseDataBase";

export class User {
    constructor(
        protected email?: string,
        protected password?: string) { }

    public async getUser(id: string, email: string) {
        const users = await BaseDataBase.connection("cookenu_users")
            .where({email})
            .orWhere({id})
        return users
    }
}