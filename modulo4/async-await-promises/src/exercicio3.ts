import axios from "axios";
import { BASE_URL } from "./urls";

type SUBSCRIBER = {
    id: string
    email: string
    name: string
}

const main = async () => {
    const getSubscribers = async (): Promise<SUBSCRIBER[]> => {
        try {
            const response = await axios.get(`${BASE_URL}/subscribers`)
            return response.data.map((subscriber: any) => {
                return {
                    id: subscriber.id,
                    name: subscriber.name,
                    email: subscriber.email
                }
            })

        } catch (error: any) {
            return error.response?.data || error.message
        }
    }

    console.log(await getSubscribers())
}

main()

//3 -a) Não teremos pois a resposta vai ter tipagem any.

//3-b) Fazemos isso para que o sistema de verificação do nosso sistema TS funcione e que a gente possa colocar a tipagem certa na promise.
