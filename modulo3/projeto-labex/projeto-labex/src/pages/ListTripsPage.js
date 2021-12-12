import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { Container, Central, Card, Trips } from "../styles/ListTripsPageStyled"
import { baseUrl } from "../constants/axiosConfig"
import Loading from "../components/Loading"


const ListTripsPage = (props) => {

    const history = useHistory()
    const [trips, setTrips] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getTrips()
    }, [])

    //---- REQUISIÇÕES

    const getTrips = () => {
        setLoading(true)
        axios.get(`${baseUrl}/trips`)
            .then((res) => {
                setTrips(res.data.trips)
                setLoading(false)
            })
            .catch((error) => {
                alert("Aconteceu um erro. Sentimos muito! Volte mais tarde.")
            })
    }

    //---- MAP

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
                {loading === true ? <Loading /> :
                    <>
                        <Trips>{listTrips}</Trips>
                        <button onClick={() => props.goToBack(history)}>Voltar</button>
                    </>}
            </Central>

        </Container>
    )
}

export default ListTripsPage;