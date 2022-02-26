import { getUserByEmail } from '../services/getUserByEmail';
import { Request, Response } from "express"
import { validateEmail } from "../uteis/validateEmail"
import generateToken from '../services/generateToken';

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(422)
            throw new Error("Parâmetros inválidos ou não enviados.")
        }

        if (validateEmail(email) === false) {
            res.status(422)
            throw new Error("Email inválido.")
        }

        const result = await getUserByEmail(email)

        if (!result) {
            res.status(404)
            throw new Error("Usuário não encontrado.")
        }

        if (result === null) {
            res.status(400)
            throw new Error("Aconteceu um erro no envio para o banco de dados.")
        }

        if (result.password !== password) {
            res.status(401)
            throw new Error("Password inválido.")
        }

        const token = generateToken({ id: result.id })

        res.status(201).send({
            token
        })

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
    }
}