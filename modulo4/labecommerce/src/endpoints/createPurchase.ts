import { sendPurchase } from './../services/sendPurchase';
import { ERROR } from './../enum';
import { Product, Purchase } from './../types';
import { selectAllProducts } from './../services/selectAllProducts';
import { Request, Response } from "express"

const filterProduct = async (id: string) => {
    return (await selectAllProducts()).filter((product: Product) => {
        return product.id === id
    })
}

export const createPurchase = async (req: Request, res: Response) => {
    try {
        const { userId, productId, quantity } = req.body

        if (!userId || !productId || !quantity) {
            throw new Error("Algum parâmetro não foi enviado.")
        }

        if (typeof (userId) !== "string" || typeof (productId) !== "string" || typeof (quantity) !== "number") {
            throw new Error("Parâmetro inválido.")
        }

        const product = await filterProduct(productId)

        if (!product.length) {
            throw new Error("Nenhum produto encontrado.")
        }

        await sendPurchase(userId, productId, quantity, product[0].price)

        res.status(201).send("Compra registrada.")

    } catch (error: any) {
        res.statusCode = +ERROR[error.message] || 500
        res.send(error.message)
    }
}