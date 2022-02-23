import dotenv from 'dotenv';
import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../Types/AuthenticationData"

dotenv.config()

const generateToken = (input: AuthenticationData) => {
    const token = jwt.sign(
        {
            id: input.id,
            role: input.role
        },
        process.env.JWT_KEY as string,
        {
            expiresIn: "1h"
        }
    )

    return token
}

export default generateToken