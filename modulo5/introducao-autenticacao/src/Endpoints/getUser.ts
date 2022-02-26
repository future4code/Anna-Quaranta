import { getUserById } from './../services/getUserById';
import { verifyToken } from './../services/verifyToken';
import { Request, Response } from "express"

export const getUser = async (req: Request, res: Response) => {
    try {
        const idUser = verifyToken(req.headers.authorization!)

        if (!idUser) {
            res.status(401)
            throw new Error("Token de 'authorization' não enviado pelo headers ou inválido.")
        }

        const result = await getUserById(idUser.id)

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