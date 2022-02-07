import { BASE_URL } from './urls';
import axios from 'axios';

const main = async () => {
    async function getSubscribers(): Promise<any[]> {
        try {
            const response = await axios.get(`${BASE_URL}/subscribers`)
            return response.data

        } catch (error: any) {
            return error.response?.data || error.message
        }
    }

    console.log(await getSubscribers())
}

main()

//1-A) GET
//1-B) Promise<any>