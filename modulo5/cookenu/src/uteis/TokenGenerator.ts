import * as jwt from "jsonwebtoken"
import dotenv from 'dotenv'


dotenv.config()

export interface Authenticator {
    id: string,
    name: string,
    email: string
}


export class TokenGenerator {
    public generate(input: Authenticator) {
        const token = jwt.sign(input, process.env.JWT_KEY as string,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as string
            }
        )

        return token
    }

    public verifyToken(token: string) {
        const data = jwt.verify(token, process.env.JWT_KEY as string)

        return data as Authenticator

    }
}