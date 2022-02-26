import dotenv from 'dotenv';
import { compareSync, genSaltSync, hashSync } from "bcryptjs"

dotenv.config()

export const generateHash = (plainText: string): string => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = genSaltSync(rounds)
    return hashSync(plainText, salt)
}

export const compareHash = (plainText: string, hash: string) => {
    return compareSync(plainText, hash)
}