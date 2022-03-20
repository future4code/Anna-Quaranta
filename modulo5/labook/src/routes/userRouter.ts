import express from "express";
import UserController from "../controller/UserController";

export const userRouter = express.Router()
const userController = new UserController()

userRouter.post("/signup", userController.signUp)
userRouter.post("/login", userController.login)
userRouter.post("/follow/:id", userController.createFriendship)
userRouter.delete("/unfollow/:id", userController.deleteFriendship)