import { validateEmail } from './../uteis/validateEmail';
import { insertUser } from './../services/insertUser';
import { idGeneration } from './../services/idGeneration';
import { Request, Response } from "express"
import generateToken from '../services/generateToken';

export const createUser = (req: Request, res: Response) => {
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

        if (password.length < 6) {
            res.status(422)
            throw new Error("Password menor que 6 caracteres.")
        }

        const id = idGeneration()
        const token = generateToken({ id })

        const result = insertUser(id, email, password)

        if (result === null) {
            res.status(400)
            throw new Error("Aconteceu um erro na requisição do banco de dados.")
        }

        res.status(201).send({
            result,
            token
        })

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
    }
}