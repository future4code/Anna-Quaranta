import { User } from './../types';
import { selectPurchasesUser } from './../services/selectPurchasesUser';
import { selectAllUsers } from './../services/selectAllUsers';
import { ERROR } from './../enum';
import { Request, Response } from "express"

const addPurchases = async (users: User[]) => {
    users.forEach(async (user: any) => {
        user.purchase = await selectPurchasesUser(user.id);
    })
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await selectAllUsers()

        if (!users.length) {
            throw new Error("Nenhum usuário encontrado.")
        }

        await addPurchases(users)

        res.status(200).send({
            users: users
        })

    } catch (error: any) {
        res.statusCode = +ERROR[error.message] || 500
        res.send(error.message)
    }
}