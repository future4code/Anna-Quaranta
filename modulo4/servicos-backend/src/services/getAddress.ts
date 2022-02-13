import { BASE_URL } from './../urls';
import axios from 'axios';
import { Address } from './../types/Address';

export const getAddress = async (cep: string): Promise<Address | null> => {
    try {
        const response = await axios.get(`${BASE_URL}/${cep}/json/`)

        const address: Address = {
            street: response.data.logradouro,
            district: response.data.bairro,
            city: response.data.localidade,
            state: response.data.uf
        }

        return address
    } catch (error) {
        return null
    }
}