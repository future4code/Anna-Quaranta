import { User } from './User.class';

export class CustomerUser extends User {

    purchaseTotal: number = 0

    constructor(
        private creditCard: string,
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        super(id, email, name, password)
        console.log("Chamando o construtor da classe Customer");
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}
