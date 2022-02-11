import { Product } from './../types';
import { sendProduct } from './../services/sendProduct';
import { Request, Response } from 'express';
import { ERROR } from './../enum';

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, imageUrl } = req.body

        //VERIFICAÇÕES

        if (!name || !price || !imageUrl) {
            throw new Error("Algum parâmetro não foi enviado.")
        }

        if (typeof (name) !== "string" || typeof (price) !== "number" || typeof (imageUrl) !== "string") {
            throw new Error("Parâmetro inválido.")
        }

        if (price <= 0) {
            throw new Error("Parâmetro inválido.")
        }

        //----------------------------------------------------

        const product: Product = {
            id: Date.now().toString(),
            name: name,
            price: price,
            image_url: imageUrl
        }

        await sendProduct(product)

        res.status(201).send("Produto criado.")

    } catch (error: any) {
        res.statusCode = +ERROR[error.message] || 500
        res.send(error.message)
    }
}