import { SignUp } from './../entities/SignUp';
import { TokenGenerator } from '../uteis/TokenGenerator';
import { Request, Response } from "express"
import { IdGenerator } from "../uteis/IdGenerator"
import { HashManager } from '../uteis/HashManagert';

export const signUp = (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body
        const id = new IdGenerator().generate()

        //VERIFICAÇÕES
        if (!name || !email || !password || !id) {
            res.status(422)
            throw new Error("Parâmetros inválidos. Verifique se 'name', 'email', 'password' estão preenchidos corretamente.")
        }

        //se a senha tiver menos de 6 caracteres
        if (password.length < 6) {
            res.status(422)
            throw new Error("'Password' inválido. Insira um password que tenha, no mínimo, 6 caracteres.")
        }

        //criptografa a senha
        const cipherPassword = new HashManager().hash(password)

        //insere o usuário na tabela
        new SignUp(id, name, email, cipherPassword).createUser()


        //gera o token de acesso
        const token = new TokenGenerator().generate({ id, name, email })

        res.status(201).send({
            message: "Usuário criado com sucesso.",
            token
        })

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
    }
}