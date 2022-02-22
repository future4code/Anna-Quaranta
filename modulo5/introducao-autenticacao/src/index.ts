import { createUser } from './Endpoints/createUser';
import { app } from './app';
import { loginUser } from './Endpoints/loginUser';
import { getUser } from './Endpoints/getUser';

app.post("/user/signup", createUser)
app.post("/user/login", loginUser)
app.get("/user/profile", getUser)