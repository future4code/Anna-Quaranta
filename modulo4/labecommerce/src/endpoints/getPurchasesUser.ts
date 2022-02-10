import { selectPurchasesUser } from './../services/selectPurchasesUser';
import { ERROR } from '../enum';
import { Request, Response } from "express";

export const getPurchasesUser = async (req: Request, res: Response) => {
    try {
        const idUser = req.params.user_id

        const purchases = await selectPurchasesUser(idUser)

        if (!purchases.length) {
            throw new Error("Nenhuma compra encontrada.")
        }

        purchases.forEach((product) => {
            let date = product.date
            date = new Date(+date).toLocaleString()
            product.date = date
        })

        res.status(200).send({
            purchases: purchases
        })

    } catch (error: any) {
        res.statusCode = +ERROR[error.message] || 500
        res.send(error.message)
    }
}