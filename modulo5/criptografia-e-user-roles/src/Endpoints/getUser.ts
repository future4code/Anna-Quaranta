import { getUserById } from '../services/getUserById';
import { Request, Response } from "express"

export const getUser = async (req: Request, res: Response) => {
    try {
        const id = req.query.id as string
        const result = await getUserById(id)

        if (result === null) {
            res.status(400)
            throw new Error("Aconteceu um erro na requisição do banco de dados.")
        }

        if (!result) {
            res.status(404)
            throw new Error("Usuário não encontrado.")
        }

        res.status(200).send({
            id: result.id,
            email: result.email
        })

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
    }
}