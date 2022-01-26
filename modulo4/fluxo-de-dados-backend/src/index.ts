import { cart } from './data';
import express, { Request, Response } from "express"
import { AddressInfo } from "net"


const app = express()
app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})

type PRODUCT = {
    id: string,
    name: string,
    price: number
}

app.get('/test', (req: Request, res: Response) => {
    res.status(200).send("API está funcional.")
})

app.get('/carrinho', (req: Request, res: Response) => {

    try {
        res.status(200).send({
            carrinho: {
                livros: cart
            }
        })
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
})

app.post('/carrinho', (req: Request, res: Response) => {
    const { name, price } = req.body

    try {

        // VERIFICAÇÕES

        if (price <= 0) {
            throw new Error("Price é menor ou igual a 0. Valor inválido.")
        }

        if (!name || !price) {
            throw new Error("Parametro não enviado.")
        }

        if (typeof (name) !== "string") {
            throw new Error("Parâmetro name não é um string")
        }

        if (typeof (price) !== "number") {
            throw new Error("Parâmetro price não é um number!")
        }



        cart.forEach((product) => {
            if (product.name.toUpperCase() === name.toUpperCase()) {
                throw new Error("Esse livro já existe no seu carrinho!")
            }
        })

        //----------------------

        const newProduct: PRODUCT = {
            id: Date.now().toString(),
            name: req.body.name,
            price: req.body.price
        }

        cart.push(newProduct)
        res.status(201).send(cart)

    } catch (error: any) {

        if (!error.message) {

            res.statusCode = 500

        } else if (error.message === "Esse livro já existe no seu carrinho!") {

            res.statusCode = 409

        } else {

            res.statusCode = 422

        }

        res.send(error.message)
    }
})

app.put('/carrinho/:id', (req: Request, res: Response) => {
    const id: string = req.params.id
    const price: number = req.body.price

    try {

        //VERIFICAÇÕES
        const index = cart.findIndex(product => product.id === id)

        if (index === -1) {
            throw new Error("Esse id não existe.")
        }

        if (!price) {
            throw new Error("Body não enviado.")
        }

        if (typeof (price) !== "number") {
            throw new Error("Parâmetro price não é um number!")
        }

        if (price <= 0) {
            throw new Error("Price é menor ou igual a 0. Valor inválido.")
        }

        //----------------------------

        cart.forEach((product) => {
            if (product.id === id) {
                product.price = price
            }
        })

        res.status(200).send({
            carrinho: {
                livros: cart
            }
        })

    } catch (error: any) {


        if (!error.message) {
            res.statusCode = 500
        } else if (error.message === "Esse id não existe.") {
            res.statusCode = 404
        } else {
            res.statusCode = 422
        }

        res.send(error.message)
    }
})

app.delete('/carrinho/:id', (req: Request, res: Response) => {
    const id: string = req.params.id

    try {
        const index = cart.findIndex(product => product.id === id)

        if (index === -1) {
            throw new Error("Esse id não existe.")
        } else {
            cart.splice(index, 1)
            res.status(200).send({
                carrinho: {
                    livros: cart
                }
            })
        }

    } catch (error: any) {

        if (!error.message) {
            res.statusCode = 500
        } else {
            res.statusCode = 404
        }

        res.send(error.message)
    }
})

