import { getRecipe } from './endpoints/getRecipe';
import { createRecipe } from './endpoints/createRecipe';
import { getOtherProfile } from './endpoints/getOtherProfile';
import { getProfile } from './endpoints/getProfile';
import { login } from './endpoints/login';
import { app } from './app';
import { signUp } from './endpoints/signUp';

app.post("/signup", signUp)
app.post("/login", login)
app.get("/user/profile", getProfile)
app.get("/user/:id", getOtherProfile)
app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipe)