import { Place } from "./Place.class";

export class Commerce extends Place {
    constructor(
        private floorsQuantity: number,
        cep: string
    ) {
        super(cep);
    }

    getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}
