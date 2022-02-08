import { getUsersByPage } from './endpoints/getUsersByPage';
import { getUsersByOrder } from './endpoints/getUsersByOrder';
import { getUsersByType } from './endpoints/getUsersByType';
import { getUsersByName } from './endpoints/getUsersByName';
import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUsers } from './endpoints/getUsers';

app.get("/users/pages", getUsersByPage)
app.get("/users", getUsersByName)
app.get("/users", getAllUsers)
app.get("/users/all", getUsers)
app.get("/users/order", getUsersByOrder)
app.get("/users/:type", getUsersByType)
