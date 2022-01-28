import express, { Request, Response } from "express"

import { AddressInfo } from "net"

const app = express()
app.use(express.json())

// configurações 
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})

// ARRAY DE TASKS

type TASK = {
    userId: number,
    id: string,
    title: string,
    completed: boolean
}

const tasks: TASK[] = [
    {
        userId: 1,
        id: "1643128834663",
        title: "fazer exercicio da tarde",
        completed: true
    },
    {
        userId: 2,
        id: "1643128852138",
        title: "estudar typescript",
        completed: false
    },
    {
        userId: 2,
        id: "1643128860003",
        title: "almoçar",
        completed: false
    },
    {
        userId: 3,
        id: "1643128865299",
        title: "fazer um projeto pessoal",
        completed: false
    }
]

// endpoints

// GETS

//GET PingPong
app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send("Pong!")
})


//GET getAllTasks
app.get('/allTasks', (req: Request, res: Response) => {
    res.status(200).send(tasks)
})


//GET getStatusTasks
app.get('/tasks', (req: Request, res: Response) => {
    const status = req.query.status
    console.log(status)

    const filteredTasks = tasks.filter((task) => {
        return task.completed.toString() === status
    })

    res.status(200).send({
        tasks: {
            status: status,
            tasks: filteredTasks
        }
    })
})


//GET getUserTasks
app.get('/userTasks/:userId', (req: Request, res: Response) => {
    const id = req.params.userId

    const index = tasks.findIndex(task => task.userId === +id)

    if (index === -1) {

        res.status(400).send("Esse ID não existe.")

    } else {

        const filteredTasks = tasks.filter(tasks => {
            return tasks.userId === +id
        })

        const othersTasks = tasks.filter(tasks => {
            return tasks.userId !== +id
        })

        res.status(200).send({
            todos: [
                { selectedUser: filteredTasks },
                { others: othersTasks }
            ]
        })
    }
})


//POSTS

//POST createTask
app.post('/createTask', (req: Request, res: Response) => {

    const newTask: TASK = {
        userId: req.body.userId,
        id: Date.now().toString(),
        title: req.body.title,
        completed: false
    }

    // colocar verificação de userID - checar se existe

    if (newTask.userId === undefined || newTask.title === undefined) {

        res.status(400).send("Um ou mais parâmetros não enviados!")

    } else {

        tasks.push(newTask)
        res.status(200).send({
            tasks: tasks
        })
    }
})


//PUTS

//PUT editStatus
app.put('/editStatus/:idTask', (req: Request, res: Response) => {
    const idQuery = req.params.idTask

    const index = tasks.findIndex(task => task.id === idQuery)

    if (index === -1) {

        res.status(400).send("Esse ID não existe.")

    } else {

        tasks.forEach((task) => {
            if (task.id.toString() === idQuery) {

                task.completed = !task.completed
                res.status(200).send({
                    task: task
                })
            }
        })
    }

})


//DELETE

//DEL deleteTask
app.delete('/deleteTask/:idTask', (req: Request, res: Response) => {
    const id = req.params.idTask

    const index = tasks.findIndex(task => task.id === id)

    if (index === -1) {

        res.status(400).send("Esse ID não existe.")

    } else {

        tasks.forEach((task, index) => {

            if (task.id === id) {
                tasks.splice(index, 1)

                res.status(200).send("Task excluída com sucesso.")
            }
        })
    }
})