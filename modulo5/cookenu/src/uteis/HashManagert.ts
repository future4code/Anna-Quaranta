import * as bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export class HashManager {
    public static hash(plainText: string) {
        const rounds = Number(process.env.HASH_COST)
        const salt = bcrypt.genSaltSync(rounds)

        return bcrypt.hashSync(plainText, salt)
    }

    public static compare(plainText: string, hash: string) {
        return bcrypt.compare(plainText, hash)
    }
}