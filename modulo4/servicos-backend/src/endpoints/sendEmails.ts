import { Request, Response } from "express"
import transporter from "../data/transporterEmail"

export const sendEmails = async (req: Request, res: Response) => {
    try {
        await transporter.sendMail({
            from: `<${process.env.NODEMAILER_USERNODEMAILER_USER}>`,
            to: "g6e8k2i3m1o7e5d9@labenualunos.slack.com",
            subject: "Mensagem do Desafio da Carver",
            text: "Eu não sei bem o que escreve aqui porque não entendi o enunciado mas o importante é que funcionou. :)",
            html: "<p>Eu não sei bem o que escreve aqui porque não entendi o enunciado mas o importante é que funcionou. <strong> :) </strong></p>"
        })

        res.status(200).send("Emails enviados com sucesso!")

    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message)
        } else {
            res.status(400).send("Aconteceu um erro inesperado.")
        }
    }
}