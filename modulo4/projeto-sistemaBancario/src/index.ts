import { DETAIL, STATEMENT, USER } from './types';
import { bankUsers } from './data'
import express, { Request, Response } from 'express'
import { AddressInfo } from 'net'

const app = express()

app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo

        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server`)
    }
})


app.get('/users', (req: Request, res: Response) => {
    try {

        let cpf = req.query.cpf as string

        if (cpf) {

            cpf = cpf.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

            const index = bankUsers.findIndex(user => user.detail.cpf === cpf)

            if (cpf.length !== 14 || index === -1) {
                throw new Error("Esse cpf é inválido.")
            }

            bankUsers.forEach((user) => {
                if (user.detail.cpf === cpf) {
                    res.status(200).send({
                        user: user
                    })
                }
            })
        }

        res.status(200).send({
            users: bankUsers
        })

    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.get('/users/bankBalance', (req: Request, res: Response) => {
    try {

        let cpf = req.query.cpf as string

        if (!cpf) {
            throw new Error("Parâmetros inválidos.")
        }

        cpf = cpf.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

        if (cpf.length !== 14) {
            throw new Error("Parâmetros inválidos.")
        }

        const index = bankUsers.findIndex(user => user.detail.cpf === cpf)

        if (index === -1) {
            throw new Error("CPF não encontrado.")
        }

        //--------------------------------

        bankUsers.forEach((user) => {
            if (user.detail.cpf === cpf) {
                res.status(200).send({
                    user: {
                        name: user.detail.name,
                        cpf: user.detail.cpf,
                        bankBalance: user.bankBalance
                    }
                })
            }
        })

    } catch (error: any) {

        switch (error.message) {
            case "Parâmetros inválidos.":
                res.statusCode = 422
                break
            case "CPF não encontrado.":
                res.statusCode = 404
                break
            default: res.statusCode = 500
        }

        res.send(error.message)
    }
})

app.post('/users', (req: Request, res: Response) => {
    try {

        const { name, birthDate } = req.body
        const cpf = req.body.cpf.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

        // VERIFICAÇÕES

        if (!name || !birthDate || !cpf) {
            throw new Error("Parâmetro inválido.")
        }

        if (cpf.length !== 14) {
            throw new Error("CPF inválido.")
        }

        const index = bankUsers.findIndex(user => user.detail.cpf === cpf)

        if (index !== -1) {
            throw new Error("Esse usuário já existe!")
        }

        const dataSplit = birthDate.split('/')
        const birth: number = new Date(dataSplit[2], dataSplit[1] - 1, dataSplit[0]).getTime()
        const today: number = Date.now()
        const age: number = Math.ceil(Math.abs(today - birth)) / (1000 * 60 * 60 * 24 * 365)

        if (age < 18) {
            throw new Error("Não tem idade o suficiente para abrir uma conta.")
        }

        const newUser: USER = {
            detail: {
                name,
                cpf,
                birthDate
            },
            bankBalance: 0,
            bankStatement: [],
        }

        bankUsers.push(newUser)
        res.status(201).send({
            users: bankUsers
        })

    } catch (error: any) {

        switch (error.message) {
            case "Não tem idade o suficiente para abrir uma conta.":
                res.statusCode = 422
                break
            case "Esse usuário já existe!":
                res.statusCode = 409
                break
            case "Parâmetro inválido.":
                res.statusCode = 422
                break
            case "CPF inválido.":
                res.statusCode = 422
                break
            default: res.statusCode = 500
        }

        res.send(error.message)

    }
})

app.post('/users/payment', (req: Request, res: Response) => {
    try {

        let cpf = req.body.cpf
        const { dueDate, description, value } = req.body

        if (dueDate) {

            //data de hoje em timestamp
            const dateSplit = new Date().toLocaleString().slice(0, 10).split("/")
            const today = new Date(+dateSplit[2], +dateSplit[1] - 1, +dateSplit[0]).getTime()

            //data de vencimento em timestamp

            let date = dueDate.split('/')
            date = new Date(date[2], date[1] - 1, date[0]).getTime()

            if (date < today) {
                throw new Error("A data de vencimento precisa ser maior que a atual.")
            }
        }

        if (!value || !description || !cpf) {
            throw new Error("Parâmetro inválido.")
        }

        cpf = cpf.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

        if (typeof (description) !== "string" || typeof (value) !== "number" || typeof (cpf) !== "string") {
            throw new Error("Parâmetro inválido.")
        }

        if (cpf.length !== 14) {
            throw new Error("CPF inválido.")
        }

        const index = bankUsers.findIndex(user => user.detail.cpf === cpf)

        if (index === -1) {
            throw new Error("CPF não encontrado.")
        }

        bankUsers.forEach((user) => {
            if (user.detail.cpf === cpf) {

                if (user.bankBalance < value) {
                    throw new Error("Saldo insuficiente.")
                }

                user.bankStatement.push({
                    value: value,
                    date: dueDate && dueDate + " " + "00:00:00" || new Date().toLocaleString(),
                    description: description
                })

                res.status(200).send({
                    users: {
                        name: user.detail.name,
                        cpf: user.detail.cpf,
                        bankStatement: user.bankStatement,
                        bankBalance: user.bankBalance
                    }
                })
            }
        })

    } catch (error: any) {

        switch (error.message) {
            case "CPF não encontrado.":
                res.statusCode = 404
                break
            case "Parâmetro inválido.":
                res.statusCode = 422
                break
            case "A data de vencimento precisa ser maior que a atual.":
                res.statusCode = 422
                break
            case "CPF inválido.":
                res.statusCode = 422
                break
            case "Saldo insuficiente.":
                res.statusCode = 422
                break
            default: res.statusCode = 500
        }

        res.send(error.message)
    }
})

app.put('users/updateBalance/:cpf', (req: Request, res: Response) => {
    try {
        const cpf: string = req.params.cpf

        console.log(cpf)
        // bankUsers.forEach((user) => {
        //     if (user.detail.cpf === cpf) {
        //         console.log("bateu")
        //     }
        // })

    } catch (error: any) {
        res.send(error.message)
    }
})

app.put('/users', (req: Request, res: Response) => {
    try {
        const { name, value } = req.body
        let cpf: string = req.body.cpf

        if (!name || !cpf || !value) {
            throw new Error("Parâmetro inválido.")
        }

        cpf = cpf.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

        if (typeof (value) !== "number" || typeof (name) !== "string" || typeof (cpf) !== "string") {
            throw new Error("Parâmetro inválido.")
        }

        if (cpf.length !== 14) {
            throw new Error("CPF inválido.")
        }

        const index = bankUsers.findIndex(user => user.detail.cpf === cpf && user.detail.name.toUpperCase() === name.toUpperCase())

        if (index === -1) {
            throw new Error("CPF ou name não encontrado.")
        }

        bankUsers.forEach((user) => {
            if (user.detail.cpf === cpf) {
                user.bankBalance += value

                user.bankStatement.push({
                    value: value,
                    date: new Date().toLocaleDateString('pt-br') + " " + new Date().toLocaleTimeString(),
                    description: "Depósito de dinheiro"
                })

                res.status(200).send({
                    user: user
                })
            }
        })

    } catch (error: any) {

        switch (error.message) {
            case "Parâmetro inválido.":
                res.statusCode = 422
                break
            case "CPF inválido.":
                res.statusCode = 422
                break
            case "CPF ou name não encontrado.":
                res.statusCode = 404
                break
            default: res.statusCode = 500
        }

        res.send(error.message)
    }
})

// const today = (new Date())
// var data = new Date().toLocaleString().substr(0, 10)

// console.log(data)

// var data = new Date().toLocaleString()

// console.log(data)

