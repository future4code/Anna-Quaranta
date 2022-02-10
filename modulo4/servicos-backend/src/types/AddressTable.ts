import { Address } from './Address';

export type AddressTable = Address & {
    id: string
    cep: string,
    number: string,
    complement?: string
}