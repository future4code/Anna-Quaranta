import { verifyToken } from './../services/verifyToken';
import { Request, Response } from "express"
import { delUser } from '../services/deleteUser';

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id
        const authorization = req.headers.authorization as string

        const response = verifyToken(authorization)

        if (response.role !== "ADMIN") {
            res.status(403)
            throw new Error("Acesso negado.")
        }

        await delUser(id)

        res.send("Usuário deletado.")

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
    }
}