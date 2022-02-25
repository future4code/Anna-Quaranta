import { User } from './../entities/User';
import { Request, Response } from "express"
import { TokenGenerator } from "../uteis/TokenGenerator"

export const getOtherProfile = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const token = req.headers.authorization

        if (!token) {
            res.status(401)
            throw new Error("Token de autorização ausente ou usuário não autorizado.")
        }

        new TokenGenerator().verifyToken(token)

        const user = await new User().getUser(id, "%")

        if (user[0] === undefined) {
            res.status(404)
            throw new Error("Usuário não encontrado.")
        }

        res.status(200).send({
            id: id,
            name: user[0].name,
            email: user[0].email
        })

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
    }
}
