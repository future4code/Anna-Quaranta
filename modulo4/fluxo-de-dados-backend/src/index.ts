import { products } from './data';
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

app.get('/products', (req: Request, res: Response) => {

    const search = req.query.name

    try {

        if (!search) {
            res.status(200).send({
                products: {
                    books: products
                }
            })

        } else {

            const filteredBooks = products.filter((product) => {
                return product.name.toUpperCase().includes(search.toString().toUpperCase())
            })

            res.status(200).send({
                products: {
                    search: search,
                    result: filteredBooks
                }
            })
        }
    } catch (error) {
        res.statusCode = 500
    }
})

app.post('/products', (req: Request, res: Response) => {
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
            throw new Error("Parâmetro price não é um number.")
        }

        products.forEach((product) => {
            if (product.name.toUpperCase() === name.toUpperCase()) {
                throw new Error("Esse livro já existe no seu carrinho.")
            }
        })

        //----------------------

        const newProduct: PRODUCT = {
            id: Date.now().toString(),
            name: req.body.name,
            price: req.body.price
        }

        products.push(newProduct)
        res.status(201).send({
            products: {
                books: products
            }
        })

    } catch (error: any) {

        if (!error.message) {

            res.statusCode = 500

        } else if (error.message === "Esse livro já existe no seu carrinho.") {

            res.statusCode = 409

        } else {

            res.statusCode = 422

        }

        res.send(error.message)
    }
})

app.put('/products/:id', (req: Request, res: Response) => {
    const id: string = req.params.id
    const name: string = req.body.name
    const price: number = req.body.price

    try {

        //VERIFICAÇÕES
        const index = products.findIndex(product => product.id === id)

        if (index === -1) {
            throw new Error("Esse id não existe.")
        }

        if (!name && !price) {
            throw new Error("Body não enviado.")
        }

        if (price !== undefined && typeof (price) !== "number") {
            throw new Error("Parâmetro price não é um number!")
        }

        if (name !== undefined && typeof (name) !== "string") {
            throw new Error("Parâmetro name não é uma string!")
        }

        if (price !== undefined && price <= 0) {
            throw new Error("Price é menor ou igual a 0. Valor inválido.")
        }

        //----------------------------

        if (name && price) {
            products.forEach((product) => {
                if (product.id === id) {
                    product.name = name
                    product.price = price
                }
            })
        }

        if (!price && name) {
            products.forEach((product) => {
                if (product.id === id) {
                    product.name = name
                }
            })
        }

        if (!name && price) {
            products.forEach((product) => {
                if (product.id === id) {
                    product.price = price
                }
            })
        }

        res.status(200).send({
            products: {
                books: products
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

app.delete('/products/:id', (req: Request, res: Response) => {
    const id: string = req.params.id

    try {
        const index = products.findIndex(product => product.id === id)

        if (index === -1) {
            throw new Error("Esse id não existe.")
        } else {
            products.splice(index, 1)
            res.status(200).send({
                products: {
                    books: products
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

