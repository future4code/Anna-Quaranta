export class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(description: string, value: number, date: string) {
        this.description = description
        this.value = value
        this.date = date
    }

    //GETTERS

    getDescription() {
        return this.description
    }
    getValue() {
        return this.value
    }
    getDate() {
        return this.date
    }


}