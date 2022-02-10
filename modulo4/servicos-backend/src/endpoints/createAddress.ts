import { AddAddress } from './../services/AddAddress';
import { AddressTable } from './../types/AddressTable';
import { getAddress } from '../services/getAddress';
import { Request, Response } from "express"

export const createAddress = async (req: Request, res: Response) => {
    try {
        const { cep, number, complement } = req.body

        if (!cep || !number) {
            throw new Error("Parâmetros inválidos.")
        }

        const response = await getAddress(cep)

        if (!response) {
            throw new Error("CEP não encontrado.")
        }

        const address: AddressTable = {
            id: Date.now().toString(),
            cep: cep,
            street: response.street,
            number: number,
            complement: complement,
            district: response.district,
            city: response.city,
            state: response.state
        }

        AddAddress(address)

        res.status(200).send({
            userAddress: address
        })

    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message)
        } else {
            res.status(400).send("Aconteceu um erro inesperado.")
        }
    }
}