import { selectAllProducts } from './../services/selectAllProducts';
import { ERROR } from './../enum';
import { Request, Response } from "express"

export const getProducts = async (req: Request, res: Response) => {
    try {
        const order = req.query.order as string || "asc"
        const search = req.query.search as string || "%"

        const products = await selectAllProducts(order, search)

        if (!products) {
            throw new Error("Nenhum produto encontrado.")
        }

        res.status(200).send({
            products: products
        })

    } catch (error: any) {
        res.statusCode = +ERROR[error.message] || 500
        res.send(error.message)
    }
}