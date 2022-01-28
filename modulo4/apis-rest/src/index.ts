import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { users } from "./data"
import { type } from "os"

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})

/* EXERCÍCIOS DISCURSIVOS

1-a) GET
1-b) /users
2-a) Por query params, porque como era uma busca por um type específico.
2-b) Fazendo uma condicional para os valores.
3-a) Query params também pois é uma busca e filtro
4-a) Nada
4-b) Não. O método PUT é usado para editar dados e não para criar.

*/

type USER = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

app.get('/users', (req: Request, res: Response) => {

    try {

        // VERIFICAÇÕES

        const type: string = req.query.type as string
        const name: string = req.query.name as string


        // se não type e nem name , retorna todos os users

        if (!type && !name) {
            res.send({
                users: users
            })
        }

        // ser tiver type e type for diferente dos parametros aceitos, retornar erro

        if (type && type.toUpperCase() !== "ADMIN" && type.toUpperCase() !== "NORMAL") {
            throw new Error("Parâmetro inválido.")
        }

        //----------------------------------------------

        const filteredUsers: USER[] = []
        let search: string;

        // se tiver name mas não tiver type

        if (name && !type) {

            //verificação da existencia do name

            const index = users.findIndex(user => user.name.toUpperCase().includes(name.toUpperCase()))

            if (index === -1) {
                throw new Error("Name não encontrado.")
            }

            // filtragem dos usuarios

            search = name

            users.forEach((user) => {
                if (user.name.toUpperCase().includes(name.toUpperCase())) {
                    filteredUsers.push(user)
                }
            })

            // se tiver type mas não tiver name

        } else if (type && !name) {

            search = type

            users.forEach((user) => {
                if (user.type.toUpperCase() === type.toUpperCase()) {
                    filteredUsers.push(user)
                }
            })

            // se tiver name e tiver type

        } else {

            search = `Type: ${type} && Name: ${name}`
            users.forEach((user) => {
                if (user.name.toUpperCase().includes(name.toUpperCase()) || user.type.toUpperCase() === type.toUpperCase()) {
                    filteredUsers.push(user)
                }
            })
        }


        // retorno do endpoint

        res.status(200).send({
            search: search,
            users: filteredUsers
        })

    } catch (error: any) {

        switch (error.message) {
            case "Parâmetro inválido.":
                res.statusCode = 422
                break
            case "Name não encontrado.":
                res.statusCode = 404
                break
            default: res.statusCode = 500
        }

        res.send(error.message)
    }
})

app.post('/users', (req: Request, res: Response) => {
    try {
        const { name, email, type, age } = req.body

        //VERIFICAÇÕES

        if (!name || !email || !type || !age) {
            throw new Error("Parâmetros faltando. Verifique os campos.")
        }

        if (typeof (age) !== "number") {
            throw new Error("Parâmetro inválido. Verifique se age é um number.")
        }

        if (typeof (name) !== "string" || typeof (email) !== "string" || typeof (type) !== "string") {
            throw new Error("Parâmetro inválido. Verifique se name, email e type são strings.")
        }

        if (type.toUpperCase() !== "ADMIN" && type.toUpperCase() !== "NORMAL") {
            throw new Error("Parâmetro inválido. Verifique se o type é ADMIN ou NORMAL.")
        }

        const index = users.findIndex((user) => {
            return user.name.toUpperCase() === name.toUpperCase() && user.email.toUpperCase() === email.toUpperCase() && user.type.toUpperCase() === type.toUpperCase() && user.age === age
        })

        if (index !== -1) {
            throw new Error("Esse usuário já existe.")
        }

        const newUser: USER = {
            id: Date.now(),
            name,
            email,
            type: type.toUpperCase(),
            age
        }

        users.push(newUser)

        res.status(201).send({
            users: users
        })

    } catch (error: any) {

        switch (error.message) {
            case "Parâmetros faltando. Verifique os campos.":
                res.statusCode = 422
                break
            case "Parâmetro inválido. Verifique se age é um number.":
                res.statusCode = 422
                break
            case "Parâmetro inválido. Verifique se name, email e type são strings.":
                res.statusCode = 422
                break
            case "Parâmetro inválido. Verifique se o type é ADMIN ou NORMAL.":
                res.statusCode = 422
                break
            case "Esse usuário já existe.":
                res.statusCode = 409
                break
            default: res.statusCode = 500
        }

        res.send(error.message)
    }
})

app.put('/users', (req: Request, res: Response) => {

    try {
        const { id, name, email, type, age } = req.body


        if (!id || !name || !email || !type || !age) {
            throw new Error("Parâmetros faltando. Verifique os campos.")
        }

        if (typeof (id) !== "number") {
            throw new Error("Parâmetro inválido. Verifique se id e age são numbers.")
        }

        if (typeof (name) !== "string" || typeof (email) !== "string" || typeof (type) !== "string") {
            throw new Error("Parâmetro inválido. Verifique se name, email e type são strings.")
        }

        const index = users.findIndex(user => user.id === id)

        if (index === -1) {
            throw new Error("Id inexistente.")
        }

        if (type.toUpperCase() !== "ADMIN" && type.toUpperCase() !== "NORMAL") {
            throw new Error("Parâmetro inválido. Verifique se o type é ADMIN ou NORMAL.")
        }

        users.forEach((user) => {
            if (user.id === id) {
                user.name = name + " - ALTERADO"
            }
        })

        res.status(200).end()

    } catch (error: any) {

        switch (error.message) {
            case "Parâmetros faltando. Verifique os campos.":
                res.statusCode = 422
                break
            case "Parâmetro inválido. Verifique se id e age são numbers.":
                res.statusCode = 422
                break
            case "Parâmetro inválido. Verifique se name, email e type são strings.":
                res.statusCode = 422
                break
            case "Parâmetro inválido. Verifique se o type é ADMIN ou NORMAL.":
                res.statusCode = 422
                break
            case "Id inexistente.":
                res.statusCode = 404
                break
            default: res.statusCode = 500
        }

        res.send(error.message)
    }
})

app.patch('/users', (req: Request, res: Response) => {

    try {
        const { id, name } = req.body

        const index = users.findIndex((user) => user.id === id)

        if (index === -1) {
            throw new Error("Id inexistente.")
        }

        if (!name) {
            throw new Error("Parâmetro inexistente ou inválido.")
        }

        users.forEach((user) => {
            if (user.id === id && name) {
                user.name = name + " - REALTERADO"
            }
        })

        res.status(200).end()

    } catch (error: any) {

        switch (error.message) {
            case "Id inexistente.":
                res.statusCode = 404
                break
            case "Parâmetro inexistente ou inválido.":
                res.statusCode = 422
                break
            default: res.statusCode = 500
        }

        res.send(error.message)

    }
})

app.delete('/users/:id', (req: Request, res: Response) => {

    try {
        const id: number = +req.params.id

        const index = users.findIndex((user) => user.id === id)

        if (index === -1) {
            throw new Error("Id inexistente.")
        }

        users.splice(index, 1)

        res.status(200).send("Usuário excluído com sucesso.")

    } catch (error: any) {
        if (error.message === "Id inexistente.") {
            res.statusCode = 404
        } else {
            res.statusCode = 500
        }

        res.send(error.message)
    }
})