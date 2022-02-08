import { Request, Response } from "express"
import { connection } from "../data/connection"


export default async function selectUsersByName(name: string): Promise<any> {
    const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio WHERE name LIKE '%${name}%';
   `)

    return result[0]
}

export const getUsersByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const name: string = req.query.name as string

        console.log(name)

        const users = await selectUsersByName(name)

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