import { UserData } from "../data/UserData"
import { HashManager } from "../services/HashManager"
import { idGenerator } from './../services/idGenerator';
import { tokenGenerator } from './../services/tokenGenerator';


export class UserBusiness {
    static signUp = async (name: string, email: string, password: string, role: string) => {
        try {
            if (!name || !email || !password || !role) {
                throw new Error("Parâmetros inválidos. Verifique se 'name', 'email', 'password', 'role'.")
            }

            if (role !== "ADMIN" && role !== "NORMAL") {
                throw new Error("Role inválido. Verifique se ele é 'ADMIN' ou 'NORMAL'.")
            }

            const id = idGenerator.generateId()

            const cipherPassword = HashManager.hash(password)

            await UserData.insertUser(id, name, email, cipherPassword, role)

            const token: string = tokenGenerator.generator({
                id,
                email,
                role
            })

            return token

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    static login = async (email: string, password: string) => {
        try {
            if (!email || !password) {
                throw new Error("Parâmetros inválidos. Verifique se 'email', 'password'.")
            }

            const [selectUser] = await UserData.selectUser(email)

            if (!selectUser) {
                throw new Error("Email ou senha incorretos.")
            }
            const checkPassword = HashManager.compare(password, selectUser.password)

            if (!checkPassword) {
                throw new Error("Email ou senha incorretos.")
            }

            const token = tokenGenerator.generator({ id: selectUser.id, email: email, role: selectUser.role })

            return token

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}