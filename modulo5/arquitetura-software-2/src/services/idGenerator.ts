import { v4 } from "uuid";

export default class IdGenerator {
    static generate(): string {
        return v4()
    }
}