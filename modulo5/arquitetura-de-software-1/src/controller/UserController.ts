import { UserBusiness } from './../business/UserBusiness';
import { Request, Response } from "express";

export class UserController {
    static signUp = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body
            const role = req.body.role || "NORMAL"

            const token = await UserBusiness.signUp(name, email, password, role)

            res.status(201).send({
                message: "Usuário criado.",
                token
            })

        } catch (error: any) {
            res.send(error.message)
        }
    }

    static login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            const token = await UserBusiness.login(email, password)

            res.status(200).send({
                message: "Usuário logado.",
                token
            })

        } catch (error: any) {
            res.send(error.message)
        }
    }
}