import { BASE_URL } from './urls';
import axios from 'axios';

type SUBSCRIBER = {
    id: string
    email: string
    name: string
}

const getSubscribers = () => {
    return axios.get(`${BASE_URL}/subscribers`)
        .then(res => res.data)
}

const sendNotifications = async (users: SUBSCRIBER[]) => {

    const promises = users.map((user) => {
        return axios.post(`${BASE_URL}/notifications`, {
            subscriberId: user.id,
            message: "O céu te ouviu: Uva-passa proibida no Natal! Venha ver mais sobre:"
        })
    })

    await Promise.all(promises)
        .then(res => console.log("Notificações enviadas."))
        .catch(err => console.log("Aconteceu um erro."))
}

getSubscribers()
    .then(sendNotifications)

//6 - a) Ele pega um array de funções e executa tudo de uma vez só.
//6 -  b) Ele não espera uma notificação ser enviada pra enviar a outra. Faz tudo em paralelo.
