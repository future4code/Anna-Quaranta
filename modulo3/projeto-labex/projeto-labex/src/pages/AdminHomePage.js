import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useProtectPage } from "../hooks/useProtectPage";
import axios from "axios";
import { baseUrl } from "../constants/url";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid black;
`
const AdminHomePage = (props) => {
    const [trips, setTrips] = useState([])
    const history = useHistory()
    useProtectPage(history, "/loginPage")

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

    const deleteTrip = async (id) => {
        const token = localStorage.getItem("token")
        try {
            const response = await axios.delete(`${baseUrl}/trips/${id}`, {
                headers: {
                    auth: token
                }
            })
            alert("Viagem excluída com sucesso!")
            getTrips()

        } catch (error) {
            alert("Aconteceu um erro. Sentimos muito. Volte mais tarde!")
            console.log(error.response)
        }
    }

    const listTrips = trips.map((trip) => {
        return (
            <Card key={trip.id} onClick={() => props.goTo(`/tripDetailsPage/${trip.id}`,history)}>
                <p>{trip.name}</p>
                <p>{trip.description}</p>
                <p>{trip.planet}</p>
                <p>{trip.durationInDays}</p>
                <p>{trip.date}</p>
                <button onClick={() => deleteTrip(trip.id)}>Excluir</button>
            </Card>
        )
    })

    const logout = () => {
        localStorage.removeItem("token")
        props.goTo("/loginPage", history)
    }

    return (
        <div>
            <button onClick={() => props.goToBack(history)}>Voltar</button>
            <button onClick={() => props.goTo('/createTripPage', history)}>Criar Viagem</button>
            <button onClick={logout}>Logout</button>
            {listTrips}
        </div>
    )
}

export default AdminHomePage;