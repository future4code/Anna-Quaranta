import { Request, Response } from "express"
import { connection } from "../data/connection"


export default async function selectUsersByType(type: string): Promise<any> {
    const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio WHERE type LIKE '%${type}%';
   `)

    return result[0]
}

export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type: string = req.params.type

        console.log(type)

        const users = await selectUsersByType(type)

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