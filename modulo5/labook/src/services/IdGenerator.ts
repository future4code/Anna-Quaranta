import { v4 } from "uuid";

export class IdGenerator {
    static generate(): string {
        return v4()
    }
}