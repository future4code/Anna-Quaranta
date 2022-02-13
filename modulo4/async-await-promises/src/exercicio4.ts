import axios from "axios"
import { BASE_URL } from "./urls"


type NEWS = {
    title: string
    content: string,
    date: number
}

const main = async () => {

    const createNews = (body: NEWS) => {
        axios.put(`${BASE_URL}/news`, body)
            .then(res => console.log("Notícia criada com sucesso."))
            .catch(err => console.log("Deu um erro."))
    }

    createNews({
        title: "Vira-lata caramelo se torna patrimônio brasileiro.",
        content: "Segundo as fontes confiáveis (Vi numa corrente de Whatsapp) Vira-lata caramelo vai se tornar patrimônio brasileiro e venda de uva-passa será proibida nas preparações de Natal.",
        date: Date.now()
    })
}

main()

// POST OU PUT PQ ADICIONARÁ ALGO NO BANCO DE DADOS