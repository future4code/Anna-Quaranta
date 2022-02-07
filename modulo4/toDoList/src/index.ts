import { createUser, getUserById, createTask, getTaskById, getAllUsers, getTasks, searchUser, createResponsible, getResponsibles, updateStatusTask, getTasksDelayed, deleteResponsible, deleteUser, deleteTask, updateUser } from './querys';
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

const validateDate = (date: string): boolean => {
    const re = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    return re.test(date)
}

const formattedDate = (result: any): void => {

    result.forEach((object: any) => {
        object.limitDate = (object.limitDate).toLocaleString('pt-br').slice(0, 10)
    })
}

enum ERROR {
    "Estão faltando parâmetros." = 422,
    "Parâmetro inválido." = 422,
    "Email inválido." = 422,
    "Usuário não encontrado." = 404,
    "'limitDate' não está no formato exigido." = 422,
    "Tarefa não encontrada." = 404
}


//---------------------------------------REQUISIÇÕES DOS USUÁRIOS

// GET getAllUsers - Pegar todos os usuários
app.get("/user/all", async (req: Request, res: Response) => {
    try {
        const result = await getAllUsers()

        res.status(200).send({
            users: result || []
        })

    } catch (error: any) {
        res.statusCode = +ERROR[error.message]
        res.send(error.message)
    }
})

// GET searchUser - Pesquisar por usuário que contenham a query no apelido ou email
app.get("/user", async (req: Request, res: Response) => {
    try {
        const query: string = req.query.query as string

        // VERIFICAÇÃO

        if (!query) {
            throw new Error("Estão faltando parâmetros.")
        }
        //---------------------------------------------------

        const result = await searchUser(query)

        res.status(200).send({
            users: result || []
        })

    } catch (error: any) {
        res.statusCode = +ERROR[error.message]
        res.send(error.message)
    }
})

// GET getUserById - Pegar usuário pelo ID
app.get("/user/:id", async (req: Request, res: Response) => {
    try {

        const id: string = req.params.id
        const result = await getUserById(id)

        // VERIFICAÇÃO

        if (!id) {
            throw new Error("Estão faltando parâmetros.")
        }

        if (result.length === 0) {
            throw new Error("Usuário não encontrado.")
        }

        //----------------------------------------------

        res.status(200).send({
            user: result
        })

    } catch (error: any) {
        res.statusCode = +ERROR[error.message]
        res.send(error.message)
    }
})

// POST createUser - Criar usuário
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

        //-----------------------------------------

        await createUser(name, nickname, email)

        res.status(201).send("Usuário criado com sucesso.")

    } catch (error: any) {
        res.statusCode = +ERROR[error.message]
        res.send(error.message)
    }
})

// PUT updateUser - Atualizar info dos usuários
app.put("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { name, nickname, email } = req.body

        // VERIFICAÇÃO

        if (!name && !nickname && !email) {
            throw new Error("Parâmetro inválido.")
        }

        //---------------------------------------------

        await updateUser(id, name, nickname, email)

        res.status(200).send("Usuário atualizado com sucesso.")

    } catch (error: any) {
        res.statusCode = +ERROR[error.message]
        res.send(error.message)
    }
})

//DELETE deleteUser - Deletar usuário. Não finalizado.
app.delete("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        if (!id) {
            throw new Error("Estão faltando parâmetros.")
        }

        await deleteUser(id)

        res.status(200).send("Usuário deletado com sucesso.")

    } catch (error: any) {
        res.status(200).send(error.message)
    }
})

//---------------------------------------REQUISIÇÕES DAS TAREFAS

// GET getTasks - Pegar usuários por querys, status ou id do criador
app.get("/task", async (req: Request, res: Response) => {
    try {
        const creatorUserId: string = req.query.creatorUserId as string
        const query: string = req.query.query as string
        const status = req.query.status as string

        // VERIFICAÇÃO

        if (!status && !creatorUserId && !query) {
            throw new Error("Estão faltando parâmetros.")
        }

        if (status && status !== "to_do" && status !== "doing" && status !== "done") {
            throw new Error("Parâmetro inválido.")
        }

        //-------------------------------------------------

        let result = await getTasks(creatorUserId, status, query)

        if (result.length) {
            formattedDate(result)
        }

        res.status(200).send({
            tasks: result || []
        })

    } catch (error: any) {
        res.statusCode = +ERROR[error.message]
        res.send(error.message)
    }
})

// GET getTasksDelayed - Pegar todas as tarefas atrasadas
app.get("/task/delayed", async (req: Request, res: Response) => {
    try {
        const result = await getTasksDelayed()
        formattedDate(result)

        res.status(200).send({
            tasks: result || []
        })

    } catch (error: any) {
        res.statusCode = +ERROR[error.message]
        res.send(error.message)
    }
})

// GET getTaskById - Pegar tarefa pelo ID
app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        let result = await getTaskById(id)

        if (!result.length) {
            throw new Error("Tarefa não encontrada.")
        }

        formattedDate(result)

        res.status(200).send(result)

    } catch (error: any) {
        res.statusCode = +ERROR[error.message]
        res.send(error.message)
    }
})

// GET getResponsibles - Pegar usuários responsáveis por uma tarefa
app.get("/task/:id/responsible", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        if (!id) {
            throw new Error("Estão faltando parâmetros.")
        }

        const result = await getResponsibles(id)

        if (!result.length) {
            throw new Error("Tarefa não encontrada.")
        }

        res.status(200).send({
            users: result
        })
    } catch (error: any) {
        res.statusCode = +ERROR[error.message]
        res.send(error.message)
    }
})

// POST createTask - Criar tarefa
app.post("/task", async (req: Request, res: Response) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body

        // VERIFICAÇÕES

        if (!title || !description || !limitDate || !creatorUserId) {
            throw new Error("Estão faltando parâmetros.")
        }

        if (typeof title !== "string" || typeof description !== "string" || typeof limitDate !== "string" || typeof creatorUserId !== "string") {
            throw new Error("Parâmetro inválido.")
        }

        if (validateDate(limitDate) === false) {
            throw new Error("'limitDate' não está no formato exigido." )
        }

        //-------------------------------------------------

        let date: any;

        date = limitDate.split("/")
        date = `${date[2]}-${date[1]}-${date[0]}`

        await createTask(title, description, date, creatorUserId)

        res.status(201).send("Tarefa adicionada com sucesso.")

    } catch (error: any) {
        res.statusCode = +ERROR[error.message]
        res.send(error.message)
    }
})

// POST createResponsible - Atribuir um usuário responsável a uma tarefa
app.post("/task/responsible", async (req: Request, res: Response) => {
    try {
        const { taskId, responsibleUserId } = req.body

        if (!taskId || !responsibleUserId) {
            throw new Error("Estão faltando parâmetros.")
        }

        await createResponsible(taskId, responsibleUserId)

        res.status(201).send("Responsabilidade atribuida.")

    } catch (error: any) {
        res.statusCode = +ERROR[error.message]
        res.send(error.message)
    }
})

// PUT updateStatusTask - Atualizar o status da tarefa pelo id
app.put("/task/status", async (req: Request, res: Response) => {
    try {
        const { id, status } = req.body

        // VERIFICAÇÕES

        if (!id || !status) {
            throw new Error("Estão faltando parâmetros.")
        }

        if (status !== "to_do" && status !== "doing" && status !== "done") {
            throw new Error("Parâmetro inválido.")
        }

        //----------------------------------------------------

        await updateStatusTask(id, status)

        res.status(200).send("Status da tarefa alterado com sucesso.")

    } catch (error: any) {
        res.statusCode = +ERROR[error.message]
        res.send(error.message)
    }
})

// DELETE deleteResponsible - Retirar um usuário responsável de uma tarefa
app.delete("/task/:taskId/responsible/:responsibleUserId", async (req: Request, res: Response) => {
    try {
        const { taskId, responsibleUserId } = req.params

        // VERIFICAÇÃO 
        if (!taskId || !responsibleUserId) {
            throw new Error("Estão faltando parâmetros.")
        }

        //----------------------------------------------------

        await deleteResponsible(taskId, responsibleUserId)

        res.status(200).send("Deletado com sucesso.")

    } catch (error: any) {
        res.statusCode = +ERROR[error.message]
        res.send(error.message)
    }
})

// DELETE deleteUser - Deletar tarefa e responsabilidades relativas à essa tarefa
app.delete("/task/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        //VERIFICAÇÃO 
        if (!id) {
            throw new Error("Estão faltando parâmetros.")
        }
        //---------------------------------------------------

        await deleteTask(id)

        res.status(200).send("Deletado com sucesso.")

    } catch (error: any) {
        res.statusCode = +ERROR[error.message]
        res.send(error.message)
    }
})
