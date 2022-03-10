import { UserInput } from './../model/User';
import BaseDataBase from './BaseDataBase';

export default class UserDataBase extends BaseDataBase {
    static createUser = async (input: UserInput) => {
        await this.connection()
            .insert(input)
    }
}