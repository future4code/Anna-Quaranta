import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { Container, Central, Card, Trips} from "../styles/ListTripsPageStyled"
import { baseUrl } from "../constants/url"

const ListTripsPage = (props) => {

    const history = useHistory()
    const [trips, setTrips] = useState([])

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {

        axios.get(`${baseUrl}/trips`)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((error) => {
                alert("Aconteceu um erro. Sentimos muito! Volte mais tarde.")
                console.log(error.response)
            })
    }

    const listTrips = trips.map((trip) => {
        return (
            <Card key={trip.id}>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Duração: {trip.durationInDays} dias</p>
                <p>Data: {trip.date}</p>
            </Card>
        )
    })

    return (
        <Container>
            <Central>
                <button onClick={() => props.goTo("/applicationForm", history)}>Inscrever-se</button>
                <h2>Se aventure conosco!</h2>
                <Trips>{listTrips}</Trips>
                <button onClick={() => props.goToBack(history)}>Voltar</button>
            </Central>

        </Container>
    )
}

export default ListTripsPage;

// deu erro na hora de tirar o objeto do trips da const trip. Ele não roda.
// const trips = useRequestDataGet(`${baseUrl}/trips`)
// console.log(trips.trips)
