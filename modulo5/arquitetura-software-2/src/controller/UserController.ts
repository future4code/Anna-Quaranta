import { signUpInputDTO } from './../model/User';
import { Request, Response } from "express";
import UserBusiness from '../business/UserBusiness';

export default class UserController {
    static signUp = async (req: Request, res: Response) => {
        const user: signUpInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role || "NORMAL"
        }

        const token = await UserBusiness.signUp(user)
        
    }
}