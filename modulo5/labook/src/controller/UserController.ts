import { DTOSignUpInputUser, Login } from './../model/User';
import { Request, Response } from "express"
import UserBusiness from '../business/UserBusiness';
import UserData from '../data/UserData';

export default class UserController {
    protected userBusiness: UserBusiness

    constructor() {
        this.userBusiness = new UserBusiness(new UserData())
    }

    signUp = async (req: Request, res: Response) => {
        const input: DTOSignUpInputUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        try {
            const token = await this.userBusiness.signUp(input)

            res.status(200).send({
                message: "Usuário criado com sucesso.",
                token
            })

        } catch (error: any) {
            res.send(error.message)
        }
    }

    login = async (req: Request, res: Response) => {
        const user: Login = {
            email: req.body.email,
            password: req.body.password
        }

        try {
            const token = await this.userBusiness.login(user)

            res.status(200).send({
                message: "Usuário logado.",
                token
            })

        } catch (error: any) {
            res.send(error.message)
        }
    }
}