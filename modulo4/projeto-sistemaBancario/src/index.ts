import { STATEMENT, USER } from './types';
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

const formatCPF = (cpf: string, name?: string): string => {

    const cpfFormatted = cpf.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

    if (cpfFormatted.length !== 14) {
        return "CPF inválido."
    }

    if (name) {

        if (bankUsers.findIndex((user) => user.detail.name.toUpperCase() === name.toUpperCase() && user.detail.cpf === cpfFormatted) === -1) {
            return "Conta não encontrada."
        }

    }

    if (bankUsers.findIndex(user => user.detail.cpf === cpfFormatted) === -1) {
        return "CPF não encontrado."
    }

    return cpfFormatted
}

// GET getUsers - Pegar todos os usuários ou filtrar pelo cpf
app.get('/users', (req: Request, res: Response) => {
    try {

        let cpf = req.query.cpf as string

        //filtrar por cpf
        if (cpf) {

            //VERIFICAÇÕES

            cpf = formatCPF(cpf)

            if (cpf === "CPF inválido." || cpf === "CPF não encontrado.") {
                throw new Error(cpf)
            }
            //------------------------------------------

            bankUsers.forEach((user) => {
                if (user.detail.cpf === cpf) {
                    res.status(200).send({
                        user: user
                    })
                }
            })
        }

        // resposta caso não seja colocado nenhum filtro
        res.status(200).send({
            users: bankUsers
        })

    } catch (error: any) {

        switch (error.message) {
            case "CPF inválido.":
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

//GET getBankFundsUser - Pegar saldo
app.get('/users/bankBalance', (req: Request, res: Response) => {
    try {

        let cpf = req.query.cpf as string

        // VERIFICAÇÕES

        if (!cpf) {
            throw new Error("Parâmetros inválidos.")
        }

        cpf = formatCPF(cpf)

        if (cpf === "CPF inválido." || cpf === "CPF não encontrado.") {
            throw new Error(cpf)
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
            case "CPF inválido.":
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

//POST createUser - Criar usuário
app.post('/users', (req: Request, res: Response) => {
    try {

        const { name, birthDate } = req.body
        const cpf = req.body.cpf.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

        // VERIFICAÇÕES

        if (!name || !birthDate || !cpf) {
            throw new Error("Parâmetro inválido.")
        }

        const cpfFormatted = formatCPF(cpf)

        if (cpfFormatted === "CPF inválido.") {
            throw new Error(cpfFormatted)
        }

        if (cpfFormatted !== "CPF não encontrado.") {
            throw new Error("Esse usuário já existe.")
        }

        const dataSplit = birthDate.split('/')
        const birth: number = new Date(dataSplit[2], dataSplit[1] - 1, dataSplit[0]).getTime()
        const today: number = Date.now()
        const age: number = Math.ceil(Math.abs(today - birth)) / (1000 * 60 * 60 * 24 * 365)

        if (age < 18) {
            throw new Error("Não tem idade o suficiente para abrir uma conta.")
        }
        //--------------------------------------

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
            case "Esse usuário já existe.":
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

//POST paymentUser - Fazer pagamento
app.post('/users/payment', (req: Request, res: Response) => {
    try {

        const { cpf, dueDate, description, value } = req.body

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

        //VERIFICAÇÕES

        if (!value || !description || !cpf) {
            throw new Error("Parâmetro inválido.")
        }
        const cpfFormatted = formatCPF(cpf)

        console.log(cpfFormatted)
        if (cpfFormatted === "CPF inválido." || cpfFormatted === "CPF não encontrado.") {
            throw new Error(cpfFormatted)
        }

        if (typeof (description) !== "string" || typeof (value) !== "number") {
            throw new Error("Parâmetro inválido.")
        }
        //----------------------------------------------

        bankUsers.forEach((user) => {
            if (user.detail.cpf === cpfFormatted) {

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

//POST transferMoney - Transferir de uma conta para outra
app.post('/users/transfer', (req: Request, res: Response) => {
    try {
        const { nameUser, nameRecipient, cpfUser, cpfRecipient, value } = req.body

        let result: {
            name: string,
            cpf: string,
            bankStatement: STATEMENT[]
        }[] = []

        //VERIFICAÇÕES

        let validUser = formatCPF(cpfUser, nameUser)
        let validRecipient = formatCPF(cpfRecipient, nameRecipient)

        if (validUser === "CPF inválido." || validUser === "Conta não encontrada.") {
            throw new Error(validUser)
        }

        if (validRecipient === "CPF inválido." || validRecipient === "Conta não encontrada.") {
            throw new Error(validRecipient)
        }

        if (typeof (nameUser) !== "string" || typeof (nameRecipient) !== "string" || typeof (value) !== "number" || typeof (cpfUser) !== "string" || typeof (cpfRecipient) !== "string" || value <= 0) {
            throw new Error("Parâmetro inválido.")
        }

        //--------------------------------------------

        bankUsers.forEach((user) => {
            if (user.detail.cpf === cpfUser && user.detail.name.toUpperCase() === nameUser.toUpperCase()) {

                //Se o saldo for menor que o saldo atual, exibir erro.

                if (user.bankBalance - value < 0) {
                    throw new Error("Saldo insuficiente.")
                }

                user.bankStatement.push({
                    value: value,
                    date: new Date().toLocaleString(),
                    description: `Transferência para ${nameRecipient}`
                })

                result.push({
                    name: user.detail.name,
                    cpf: user.detail.cpf,
                    bankStatement: user.bankStatement
                })
            }

            if (user.detail.cpf === cpfRecipient && user.detail.name.toUpperCase() === nameRecipient.toUpperCase()) {

                user.bankStatement.push({
                    value: value,
                    date: new Date().toLocaleString(),
                    description: `Transferência de ${nameUser}`
                })

                result.push({
                    name: user.detail.name,
                    cpf: user.detail.cpf,
                    bankStatement: user.bankStatement
                })
            }
        })

        res.status(200).send({ transition: result })

    } catch (error: any) {

        switch (error.message) {
            case "CPF inválido.":
                res.statusCode = 422
                break
            case "Conta não encontrada.":
                res.statusCode = 404
                break
            case "Saldo insuficiente.":
                res.statusCode = 422
                break
            case "Parâmetro inválido.":
                res.statusCode = 422
                break
            default: res.statusCode = 500
        }

        res.send(error.message)
    }
})

//PUT addMoney - Depositar dinheiro na conta
app.put('/users', (req: Request, res: Response) => {
    try {
        const { name, cpf, value } = req.body

        // VERIFICAÇÕES

        if (!name || !cpf || !value) {
            throw new Error("Parâmetro inválido.")
        }

        if (typeof (value) !== "number" || typeof (name) !== "string" || typeof (cpf) !== "string" || value <= 0) {
            throw new Error("Parâmetro inválido.")
        }

        const cpfFormatted = formatCPF(cpf, name)

        if (cpfFormatted === "CPF inválido." || cpfFormatted === "Conta não encontrada.") {
            throw new Error(cpfFormatted)
        }

        //--------------------------------------------

        bankUsers.forEach((user) => {
            if (user.detail.cpf === cpfFormatted) {
                user.bankBalance += value

                user.bankStatement.push({
                    value: value,
                    date: new Date().toLocaleString(),
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
            case "Conta não encontrada.":
                res.statusCode = 404
                break
            default: res.statusCode = 500
        }

        res.send(error.message)
    }
})

//PUT updateFundsUser - Atualizar o saldo da conta 
app.put('/users/updateBalance/:cpf', (req: Request, res: Response) => { //*
    try {
        let cpf = req.params.cpf

        //VERIFICAÇÕES

        cpf = formatCPF(cpf)

        if (cpf === "CPF inválido." || cpf === "CPF não encontrado.") {
            throw new Error(cpf)
        }
        //---------------------------------------------------

        bankUsers.forEach((user) => {
            if (user.detail.cpf === cpf) {

                user.bankBalance = 0
                user.bankStatement.forEach((transition) => {

                    //data de hoje em timestamp
                    let now: number | string[] = new Date().toLocaleString().slice(0, 10).split("/")
                    now = new Date(+now[2], +now[1] - 1, +now[0]).getTime()

                    //data de vencimento em timestamp

                    let date: number | string[] = transition.date.slice(0, 10).split('/')
                    date = new Date(+date[2], +date[1] - 1, +date[0]).getTime()

                    if (date < now) {
                        console.log(transition.value)

                        if (transition.description === "Depósito de dinheiro" || transition.description.includes("Transferência de")) {
                            user.bankBalance += transition.value
                        } else {
                            user.bankBalance -= transition.value
                        }
                        console.log("saldo total:", user.bankBalance)
                    }

                })

                res.status(200).send({
                    user: user
                })
            }
        })


    } catch (error: any) {

        switch (error.message) {
            case "CPF inválido.":
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