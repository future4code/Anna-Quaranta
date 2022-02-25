import { TokenGenerator } from './../uteis/TokenGenerator';
import { Request, Response } from "express"

export const getProfile = (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        if (!token) {
            res.status(401)
            throw new Error("Token de autorização ausente ou usuário não autorizado.")
        }

        const checkToken = new TokenGenerator().verifyToken(token)

        res.status(200).send({
            id: checkToken.id,
            name: checkToken.name,
            email: checkToken.email
        })

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
    }
}
