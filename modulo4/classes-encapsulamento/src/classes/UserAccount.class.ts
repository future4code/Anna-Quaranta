import { Transaction } from './Transaction.class';

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
        transaction: Transaction
    ) {
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions.push(transaction)
    }

    setBank(){
        
    }

    // GETTERS

    getCpf() {
        return this.cpf
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getBalance() {
        return this.balance
    }

    getTransactions() {
        return this.transactions
    }
}
