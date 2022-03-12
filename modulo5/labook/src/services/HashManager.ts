import { compareSync, genSaltSync, hashSync } from "bcryptjs"

export class HashManager {
    static hash(plainText: string) {
        const rounds = Number(process.env.HASH_COST)
        const salt = genSaltSync(rounds)

        return hashSync(plainText, salt)
    }

    static compareHash(plainText: string, hash: string): boolean {
        return compareSync(plainText, hash)
    }
}
