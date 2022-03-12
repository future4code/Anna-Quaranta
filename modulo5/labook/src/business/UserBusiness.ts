import { UserRepository } from './Repository/UserRepository';
import { TokenGenerator } from './../services/TokenGenerator';
import { IdGenerator } from './../services/IdGenerator';
import { DTOSignUpInputUser, User, Login } from './../model/User';
import validateEmail from '../services/validateEmail';
import { Authenticator } from '../model/Authenticator';
import { HashManager } from '../services/HashManager';

export default class UserBusiness {
    
    public idGenerator: string
    public userData: UserRepository

    constructor(userDataImplementation: UserRepository) {
        this.idGenerator = IdGenerator.generate()
        this.userData = userDataImplementation
    }

    signUp = async (input: DTOSignUpInputUser) => {
        const { name, email, password } = input

        if (!name || !email || !password) {
            throw new Error("Verifique se 'name', 'email', 'password' estão preenchidos.")
        }

        if (validateEmail(email) === false) {
            throw new Error("Email inválido. Verifique se ele está no formato string@string.string .")
        }

        const [checkUser] = await this.userData.findByEmail(email)

        if (checkUser) {
            throw new Error("Esse usuário já está sendo usado.")
        }

        const cipherPassword = HashManager.hash(password)

        const user: User = {
            id: this.idGenerator,
            name,
            email,
            password: cipherPassword
        }

        await this.userData.createUser(user)

        const authenticator: Authenticator = {
            id: this.idGenerator,
            email
        }

        const token = TokenGenerator.generate(authenticator)

        return token

    }

    login = async (input: Login) => {
        const { email, password } = input

        if (!email || !password) {
            throw new Error("Verifique se 'email', 'password' estão preenchidos.")
        }

        const [checkUser] = await this.userData.findByEmail(email)

        if (!checkUser) {
            throw new Error("Email ou senha incorreta.")
        }

        if (HashManager.compareHash(password, checkUser.password) === false) {
            throw new Error("Email ou senha incorreta.")
        }

        const authenticator: Authenticator = {
            id: checkUser.id,
            email
        }

        const token = TokenGenerator.generate(authenticator)

        return token
    }
}