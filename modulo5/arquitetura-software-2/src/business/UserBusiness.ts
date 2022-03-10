import UserDataBase from '../data/UserDataBase';
import IdGenerator from '../services/idGenerator';
import { signUpInputDTO, UserInput } from './../model/User';

export default class UserBusiness {
    static signUp = async (user: signUpInputDTO) => {

        if (!user.name || !user.email || !user.nickname || !user.password || !user.role) {
            throw new Error("Parâmetros inválidos.")
        }

        if (user.role !== "NORMAL" && user.role !== "ADMIN") {
            throw new Error("Role inválido.")
        }

        const inputUser: UserInput = {
            id: IdGenerator.generate(),
            name: user.name,
            nickname: user.nickname,
            email: user.email,
            password: user.password,
            role: user.role
        }

        await UserDataBase.createUser(inputUser)
    }
}