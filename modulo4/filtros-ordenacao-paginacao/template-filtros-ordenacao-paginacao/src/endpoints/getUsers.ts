import { user } from './../types';
import { Request, Response } from "express"
import { connection } from "../data/connection"


const selectAllUser = async (order: string, offset: number): Promise<user[]> => {
    return await connection.raw(`
    SELECT * FROM aula48_exercicio ORDER BY ${order} OR ORDER BY name DESC LIMIT 5 OFFSET ${offset}
    `)
}

const selectUsersSearch = async (name: string, type: string, order: string, offset: number): Promise<user[]> => {
    return await connection.raw(`
    SELECT *
    FROM aula48_exercicio WHERE name LIKE "%${name}%" Or type LIKE "%${type}%" ORDER BY ${order} OR ORDER BY name DESC LIMIT 5 OFFSET ${offset}
    `)
}

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let name = req.query.name as string
        let type = req.query.name as string
        let order = req.query.order as string
        let page = Number(req.query.page)

        if (!page) {
            page = 1
        }

        const offset = 5 * (page - 1)

        if (!name || !type) {
            res.status(200).send(selectAllUser(order, offset))
        } else {
            res.status(200).send(selectUsersSearch(name, type, order, offset))
        }

    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}