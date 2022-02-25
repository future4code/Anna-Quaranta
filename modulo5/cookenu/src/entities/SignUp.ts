import { BaseDataBase } from './../data/BaseDataBase';
import { User } from "./User";

export class SignUp extends User {
    constructor(
        protected id: string,
        protected name: string,
        email: string,
        password: string
    ) {
        super(email, password)
    }

    public async createUser() {
        try {
            await BaseDataBase.connection("cookenu_users")
                .insert({
                    id: this.id,
                    name: this.name,
                    email: this.email,
                    password: this.password
                })

        } catch (error: any) {
            throw new Error(error.sql || error.message)
        }
    }


}