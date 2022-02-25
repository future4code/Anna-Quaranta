import { Recipes } from './../entities/Recipe';
import { Request, Response } from "express"
import { IdGenerator } from "../uteis/IdGenerator"
import { TokenGenerator } from '../uteis/TokenGenerator';

export const createRecipe = (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization
        const { title, description } = req.body
        const id = new IdGenerator().generate()

        if (!token) {
            res.status(401)
            throw new Error("Token de autorização ausente ou usuário não autorizado.")
        }

        if (!title || !description) {
            res.status(422)
            throw new Error("Parâmetros inválidos. Verifique se 'title', 'description' estão preenchidos corretamente.")
        }

        const checkToken = new TokenGenerator().verifyToken(token)

        const newRecipe = new Recipes(id, title, description, checkToken.id)

        newRecipe.createRecipe()

        res.status(201).send("Receita criada com sucesso.")


    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
    }
}
