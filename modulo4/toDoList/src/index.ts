import { createUser, getUserById, createTask, getTaskById } from './querys';
import express, { Request, Response } from "express"
import cors from "express"
import { AddressInfo } from "net"

const app = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})


const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

enum ERROR {
    "Estão faltando parâmetros." = 422,
    "Parâmetro inválido." = 422,
    "Email inválido." = 422
}

// GET getUserById - Pegar usuário pelo ID
app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id
        const result = await getUserById(id)

        if (result.length === 0) {
            throw new Error("Usuário inexistente.")
        }

        res.status(200).send({
            user: result
        })

    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

//POST createUser - Criar usuário
app.post("/user", async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body

        // VERIFICAÇÕES

        if (!name || !nickname || !email) {
            throw new Error("Estão faltando parâmetros.")
        }

        if (typeof (name) !== "string" || typeof (nickname) !== "string" || typeof (email) !== "string") {
            throw new Error("Parâmetro inválido.")
        }

        if (name.length < 3 || email.length < 5) {
            throw new Error("Parâmetro inválido.")
        }

        if (validateEmail(email) === false) {
            throw new Error("Email inválido.")
        }

        await createUser(name, nickname, email)

        res.status(201).send("Usuário criado com sucesso.")

    } catch (error: any) {
        res.status(500).send(error.message)
    }
})


app.put("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

// POST createTask - Criar tarefa
app.post("/task", async (req: Request, res: Response) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body

        if (!title || !description || !limitDate || !creatorUserId) {
            throw new Error("Estão faltando parâmetros.")
        }

        if (typeof title !== "string" || typeof description !== "string" || typeof limitDate !== "string" || typeof creatorUserId !== "string") {
            throw new Error("Parâmetro inválido.")
        }

        if (limitDate.length < 10) {
            throw new Error("Parâmetro inválido.")
        }

        let date: any = limitDate.split("/")
        date = `${date[2]}-${date[1]}-${date[0]}`

        await createTask(title, description, date, creatorUserId)

        res.status(201).send("Tarefa adicionada com sucesso.")

    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

//GET getTaskById - Pegar tarefa pelo ID
app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        let result = await getTaskById(id)

        result[0].limitDate = result[0].limitDate.toLocaleString('pt-br').slice(0,10)

        res.status(200).send(result)

    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

// console.log("07/09/2001".split("/"))
let date: any = "07/09/2001".split("/")
date = `${date[2]}-${date[1]}-${date[0]}`
console.log(date)