import axios from 'axios'
import { BASE_URL } from './urls'

type SUBSCRIBER = {
    id: string
    email: string
    name: string
}

const getSubscribers = () => {
    return axios.get(`${BASE_URL}/subscribers`)
        .then(res => res.data)
}

const sendNotifications = (subscribers: SUBSCRIBER[]) => {

    subscribers.forEach((user) => {
        axios.post(`${BASE_URL}/notifications`, {
            subscriberId: user.id,
            message: "O céu te ouviu: Uva-passa proibida no Natal! Venha ver mais sobre:"
        })
            .then(res => console.log(`Mensagem enviada para ${user.name}!`))
            .catch(err => console.log(err.response?.data || err.message))
    })
}

getSubscribers()
    .then(sendNotifications)
