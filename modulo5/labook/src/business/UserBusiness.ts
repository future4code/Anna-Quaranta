import { UserRepository } from './Repository/UserRepository';
import { TokenGenerator } from './../services/TokenGenerator';
import { IdGenerator } from './../services/IdGenerator';
import { DTOSignUpInputUser, User, DTOInputLogin, DTOInputFriendship, Friendship } from './../model/User';
import validateEmail from '../services/validateEmail';
import { Authenticator } from '../model/Authenticator';
import { HashManager } from '../services/HashManager';

export default class UserBusiness {

    private idGenerator: string
    private userData: UserRepository

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

        const [checkUser] = await this.userData.findBy(email, "%")

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

    login = async (input: DTOInputLogin) => {
        const { email, password } = input

        if (!email || !password) {
            throw new Error("Verifique se 'email', 'password' estão preenchidos.")
        }

        const [checkUser] = await this.userData.findBy(email, "%")

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

    createFriendship = async (input: DTOInputFriendship) => {
        const { token, id_user } = input

        if (!token || !id_user) {
            throw new Error("Verifique se o header 'authorization' e o params 'id' foram enviados.")
        }

        const checkToken = TokenGenerator.verifyToken(token)

        if (!checkToken) {
            throw new Error("Token inexistente ou inválido.")
        }

        const checkUser = await this.userData.findBy("%", id_user)

        if (!checkUser) {
            throw new Error("Usuário não encontrado.")
        }

        const [checkFriendship] = await this.userData.findFriendship(checkToken.id, id_user)

        if (checkFriendship) {
            throw new Error("Vocês já são amigos.")
        }

        const friendship: Friendship = {
            id: this.idGenerator,
            id_user1: checkToken.id,
            id_user2: id_user
        }

        const friendship2: Friendship = {
            id: IdGenerator.generate(),
            id_user1: id_user,
            id_user2: checkToken.id
        }

        await this.userData.createFriendship(friendship)
        await this.userData.createFriendship(friendship2)
    }

    deleteFriendship = async (input: DTOInputFriendship) => {
        const { token, id_user } = input

        if (!token || !id_user) {
            throw new Error("Verifique se o header 'authorization' e o params 'id' foram enviados.")
        }

        const checkToken = TokenGenerator.verifyToken(token)

        if (!checkToken) {
            throw new Error("Token inexistente ou inválido.")
        }

        const checkUser = await this.userData.findBy("%", id_user)

        if (!checkUser) {
            throw new Error("Usuário não encontrado.")
        }

        const [checkFriendship] = await this.userData.findFriendship(checkToken.id, id_user)

        if (!checkFriendship) {
            throw new Error("Vocês não são amigos.")
        }

        await this.userData.deleteFriendship(checkToken.id, id_user)
        await this.userData.deleteFriendship(id_user, checkToken.id)

    }
}