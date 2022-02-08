import { Request, Response } from "express"
import { connection } from "../data/connection"


export default async function selectUsersByPage(offset: number): Promise<any> {
    const result = await connection.raw(`
      SELECT *
      FROM aula48_exercicio LIMIT 5 OFFSET ${offset};
   `)

    return result[0]
}

export const getUsersByPage = async (req: Request, res: Response): Promise<void> => {
    try {
        const page = Number(req.query.page)

        const offset = 5 * (page - 1)
        const users = await selectUsersByPage(offset)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}