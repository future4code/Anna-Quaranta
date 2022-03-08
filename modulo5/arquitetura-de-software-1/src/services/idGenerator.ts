import { v4 } from "uuid"

export class idGenerator {
    static generateId = () => {
        return v4()
    }
}