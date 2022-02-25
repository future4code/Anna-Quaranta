import { TokenGenerator } from './../uteis/TokenGenerator';
import { User } from './../entities/User';
import { Request, Response } from "express"
import { HashManager } from "../uteis/HashManagert"

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        //VERIFICAÇÕES
        if (!email || !password) {
            res.status(422)
            throw new Error("Parâmetros inválidos. Verifique se 'email', 'password' estão preenchidos corretamente.")
        }

        //verifica se o email existe
        const user = await new User(email, password).getUser("%", email)

        //se não existe dá erro
        if (user[0] === undefined) {
            res.status(422)
            throw new Error("Email ou senha incorreta.")
        }

        //se existe checa se a senha é compatível
        const checkPassword = await new HashManager().compare(password, user[0].password)

        //se não for retorna erro
        if (checkPassword === false) {
            res.status(422)
            throw new Error("Email ou senha incorreta.")
        }

        //se for, gera um token de acesso
        const token = new TokenGenerator().generate({
            id: user[0].id,
            name: user[0].name,
            email: email
        })

        res.status(200).send({
            message: "Usuário logado.",
            token
        })

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
    }
}