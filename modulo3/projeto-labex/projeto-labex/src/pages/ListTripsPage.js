import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { Card } from "../styles/ListTripsPageStyled"
// import { useRequestDataGet } from "../services/useRequestDataGet"
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
                <p>{trip.name}</p>
                <p>{trip.description}</p>
                <p>{trip.planet}</p>
                <p>{trip.durationInDays}</p>
                <p>{trip.date}</p>
            </Card>
        )
    })

    return (
        <div>
            <button onClick={() => props.goToBack(history)}>Voltar</button>
            <button onClick={() => props.goTo("/applicationFormPage", history)}>Inscrever-se</button>
            <h1>ListTripsPage</h1>
            {listTrips}
        </div>
    )
}

export default ListTripsPage;

// deu erro na hora de tirar o objeto do trips da const trip. Ele não roda.
// const trips = useRequestDataGet(`${baseUrl}/trips`)
// console.log(trips.trips)
