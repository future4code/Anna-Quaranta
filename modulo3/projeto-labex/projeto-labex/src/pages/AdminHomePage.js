import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useProtectPage } from "../hooks/useProtectPage";
import { baseUrl } from "../constants/url";
import { Container, Card, Central, Button , Info} from '../styles/AdminHomePageStyled'
import delet from '../uteis/delet.svg'
import detail from '../uteis/detalhes.svg'
import Loading from '../components/Loading'
import axios from "axios";

const AdminHomePage = (props) => {
    const [trips, setTrips] = useState([])
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    useProtectPage(history, "/login")

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        setLoading(true)
        axios.get(`${baseUrl}/trips`)
            .then((res) => {
                setTrips(res.data.trips)
                setLoading(false)
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
            <Card key={trip.id}>
                <Info>
                    <p>Nome: {trip.name}</p>
                    <p>Descrição: {trip.description}</p>
                    <p>Planeta: {trip.planet}</p>
                    <p>Duração: {trip.durationInDays} dias</p>
                    <p>Data: {trip.date}</p>
                </Info>
                <img src={detail} alt="icone de detalhes" onClick={() => props.goTo(`/tripDetails/${trip.id}`, history)}/>
                <img src={delet} alt="icone de deletar" onClick={() => deleteTrip(trip.id)}/>
            </Card>
        )
    })

    const logout = () => {
        localStorage.removeItem("token")
        props.goTo("/login", history)
    }

    return (
        <Container>
            <Central>
                <h2>Bem vinde, Administrador!</h2>
                <Button>
                    <button onClick={() => props.goToBack(history)}>Voltar</button>
                    <button onClick={() => props.goTo('/createTrip', history)}>Criar Viagem</button>
                    <button onClick={logout}>Logout</button>
                </Button>
                {loading === true ? <Loading/> : listTrips}
                {/* {listTrips} */}
            </Central>
        </Container>
    )
}

export default AdminHomePage;