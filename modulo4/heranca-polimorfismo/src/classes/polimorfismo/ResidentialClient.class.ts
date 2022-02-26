import { Client } from "./Client.interface"
import { Residence } from "./Residence.class"

export class ResidentialClient extends Residence implements Client {
    constructor(
        residentQuantity: number,
        cep: string,
        private cpf: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number
    ) {
        super(residentQuantity, cep)
    }

    getCPF(): string {
        return this.cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
}