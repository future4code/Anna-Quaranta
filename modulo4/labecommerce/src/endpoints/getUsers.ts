import { User } from './../types';
import { selectPurchasesUser } from './../services/selectPurchasesUser';
import { selectAllUsers } from './../services/selectAllUsers';
import { ERROR } from './../enum';
import { Request, Response } from "express"

export const addPurchase = async (users: any): Promise<any> => {
    for (let i = 0; i < users.length; i++) {
        users[i].purchases = await selectPurchasesUser(users[i].id)
    }
    return users
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await selectAllUsers().then(addPurchase)

        res.status(200).send(users)

    } catch (error: any) {
        res.statusCode = +ERROR[error.message] || 500
        res.send(error.message || "Erro inesperado")
    }
}