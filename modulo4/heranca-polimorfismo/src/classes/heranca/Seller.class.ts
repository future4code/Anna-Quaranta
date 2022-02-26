import { Employee } from "./Employee.class";

export class Seller extends Employee {
    private salesQuantity: number = 0

    public setSalesQuantity(quantity: number): void {
        this.salesQuantity + quantity
        console.log(this.salesQuantity)
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + 400 + (5 * this.salesQuantity)
    }
}
