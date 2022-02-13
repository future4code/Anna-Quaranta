import { BASE_URL } from './urls';
import axios from 'axios'


const main = async () => {
    const getSubscribers = async (): Promise<any[]> => {
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

//2- a) primeiro declara uma variavel e atribui a essa variável a propriedade async, coloca os parenteses dos parametros, dois pontos e a atribui o Promise como resposta com o que esperar dele entre < >, põe uma flecha e um = e abre as chaves. Dentro coloca o necessário.