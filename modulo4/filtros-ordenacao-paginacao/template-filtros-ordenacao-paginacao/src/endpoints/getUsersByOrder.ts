import { Request, Response } from "express"
import { connection } from "../data/connection"


export default async function selectUsersByOrder(name?: string, type?: string): Promise<any> {
    const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio ORDER BY ${name} OR ORDER BY ${type} OR ORDER BY email
   `)

    return result[0]
}

export const getUsersByOrder = async (req: Request, res: Response): Promise<void> => {
    try {

        const name: string = req.query.name as string
        const type: string = req.query.type as string
        const users = await selectUsersByOrder(name, type)

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