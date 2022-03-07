import { sendMail } from './../data/transporter';
import { User } from './../entities/User';
import { TokenGenerator } from './../uteis/TokenGenerator';
import { Request, Response } from "express"
import { HashManager } from '../uteis/HashManagert';

export const forgetPassword = async (req: Request, res: Response) => {
    try {
        const email = req.body.email
        const token = req.headers.authorization

        //VERIFICAÇÕES
        if (!token) {
            res.status(401)
            throw new Error("Token de autorização ausente ou usuário não autorizado.")
        }

        //verifica se o id existe e s
        if (!email) {
            res.status(422)
            throw new Error("Parâmetros inválidos. Verifique se 'title', 'description' estão preenchidos corretamente.")
        }

        //Checa se o token é válido
        const checkToken = TokenGenerator.verifyToken(token)

        const cipherPassword = HashManager.hash("senhapadrao123")

        User.updatePassword(cipherPassword, checkToken.id)

        await sendMail(checkToken.name, email)

        res.status(200).send("Email enviado.")

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        }
    }
}