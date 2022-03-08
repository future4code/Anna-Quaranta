import { app } from './app';
import { UserController } from './controller/UserController';

app.post("/signup", UserController.signUp)
app.post("/login", UserController.login)