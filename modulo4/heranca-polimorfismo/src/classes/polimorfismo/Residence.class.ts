import { Place } from "./Place.class";

export class Residence extends Place {
    constructor(
        private residentsQuantity: number,
        cep: string
    ) {
        super(cep);
    }



    getResidentsQuantity() {
        return this.residentsQuantity
    }
}