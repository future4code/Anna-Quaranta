import { Client } from './Client.interface';
export class ClientManage {
    constructor(
        protected clients: Client[]
    ) { }

    getClientsQuantity(): number {
        return this.clients.length
    }
}