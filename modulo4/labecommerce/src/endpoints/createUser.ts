import { ERROR } from './../enum';
import { User } from './../types';
import { sendUser } from './../services/sendUser';
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body
        const id: string = Date.now().toString()

        // VERIFICAÇÕES -------------------------------------

        if (!name || !email || !password) {
            throw new Error("Algum parâmetro não foi enviado.")
        }

        if (typeof (name) !== "string" || typeof (email) !== "string" || typeof (password) !== "string") {
            throw new Error("Parâmetro inválido.")
        }

        //----------------------------------------------------

        const user: User = {
            id: id,
            name: name,
            email: email,
            password: password
        }

        await sendUser(user)

        res.status(201).send("Usuário criado com sucesso.")

    } catch (error: any) {
        res.statusCode = +ERROR[error.message] || 500
        res.send(error.message)
    }
}