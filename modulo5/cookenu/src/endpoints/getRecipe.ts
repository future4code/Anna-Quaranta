import { Recipes } from './../entities/Recipe';
import { Request, Response } from "express"
import { TokenGenerator } from "../uteis/TokenGenerator"

export const getRecipe = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const token = req.headers.authorization

        if (!token) {
            res.status(401)
            throw new Error("Token de autorização ausente ou usuário não autorizado.")
        }

        new TokenGenerator().verifyToken(token)

        const recipe = await new Recipes().getRecipe(id)

        if (recipe[0] === undefined) {
            res.status(404)
            throw new Error("Receita não encontrada.")
        }

        const createdAt = recipe[0].createdAt.toLocaleDateString()

        res.status(200).send({
            id: recipe[0].id,
            title: recipe[0].title,
            description: recipe[0].description,
            createdAt: createdAt
        })

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
    }
}
