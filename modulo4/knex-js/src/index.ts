import * as Q from './querys';
import { AddressInfo } from 'net';
import express, { Request, Response } from 'express';
import cors from 'cors'

const app = express()
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

//1- a) A resposta é um array com dois arrays dentro, o primeiro sendo a resposta e o segundo configurações

app.get("/users/", async (req: Request, res: Response) => {
    try {
        res.status(200).send(await Q.getActor())
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        res.status(200).send(await Q.getActorById(id))
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.get("/actor/:name", async (req: Request, res: Response) => {

    try {
        const name: string = req.params.name
        res.status(200).send(await Q.getActorByName(name))

    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender: string = req.query.gender as string

        res.status(200).send({ quantify: await Q.getCountActorByGender(gender) })


    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.get("/actor/count/:gender", async (req: Request, res: Response) => {
    try {
        console.log("bateu")
        const gender: string = req.params.gender

        res.status(200).send(await Q.getCountActorByGender(gender))

    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.get("/actor/media/:gender", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender
        res.status(200).send(await Q.mediaSalary(gender))

    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.post("/actor", async (req: Request, res: Response) => {
    try {

        const { name, salary, dateOfBirth, gender } = req.body
        const id = Date.now().toString()

        res.status(201).send(await Q.createActor(id, name, salary, dateOfBirth, gender))


    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.put("/actor", async (req: Request, res: Response) => {
    try {
        const { id, salary } = req.body

        res.status(200).send(await Q.updateSalary(id, salary))

    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        res.status(200).send(await Q.deleteActor(id))

    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

//------------------------------------------------------------
app.get("/movie/all", async (req: Request, res: Response) => {
    try {
        res.status(200).send(await Q.getAllMovies())
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.get("/movie/search", async (req: Request, res: Response) => {
    try {
        const query: string = req.query.query as string
        res.status(200).send(await Q.getSearchMovie(query))
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.post("/movie", async (req: Request, res: Response) => {
    try {
        const { title, synopsis, releaseDate, playingLimitDate } = req.body

        await Q.createMovie(title, synopsis, releaseDate, playingLimitDate)

        res.status(201).send("Filme criado.")

    } catch (error: any) {
        res.status(500).send(error.message)
    }
})


