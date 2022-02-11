import { getPurchasesUser } from './endpoints/getPurchasesUser';
import { createPurchase } from './endpoints/createPurchase';
import { getProducts } from './endpoints/getProducts';
import { createProduct } from './endpoints/createProduct';
import { getUsers } from './endpoints/getUsers';
import { createUser } from './endpoints/createUser';
import { app } from './data/app';

// endpoint de user

app.post("/users", createUser)
app.get("/users", getUsers)

// endpoint de produtos

app.post("/products", createProduct)
app.get("/products", getProducts)

// endpoint de compra
app.post("/purchases", createPurchase)
app.get("/users/:user_id/purchases", getPurchasesUser)