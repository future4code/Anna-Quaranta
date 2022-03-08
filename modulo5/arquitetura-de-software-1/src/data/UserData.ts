import { BaseDataBase } from "./BaseDataBase";

export class UserData extends BaseDataBase {
    static insertUser = async (id: string, name: string, email: string, password: string, role: string) => {
        try {

            await this.connection("User_Arq")
                .insert({
                    id,
                    name,
                    email,
                    password,
                    role
                })

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    static selectUser = async (email: string) => {
        return await this.connection("User_Arq")
            .where({ email })
    }
}

