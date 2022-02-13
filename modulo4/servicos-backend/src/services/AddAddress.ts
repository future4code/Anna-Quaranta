import { AddressTable } from '../types/AddressTable';
import connection from "../data/connection"

export const AddAddress = async (address: AddressTable) => {

    await connection("address_users")
        .insert(address)
}