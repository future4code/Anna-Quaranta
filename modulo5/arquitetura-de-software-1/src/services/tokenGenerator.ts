import * as jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import { Authenticator } from "./Authenticator"

dotenv.config()

export class tokenGenerator {
    static generator = (input: Authenticator) => {
        const token = jwt.sign(input, process.env.JWT_KEY as string, {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as string
        })

        return token
    }

    static verifyToken(token: string): Authenticator {
        const data = jwt.verify(token, process.env.JWT_KEY as string)

        return data as Authenticator

    }
}