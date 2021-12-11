import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { baseUrl } from "../constants/url";
import { Central, Container, Card, Card2, Info, Card3} from "../styles/TripDetailsPageStyled";
import { useProtectPage } from "../hooks/useProtectPage";
import add from "../uteis/add.svg"
import deny from "../uteis/deny.svg"


const TripDetailsPage = (props) => {
    const pathParams = useParams()
    const history = useHistory()
    const id = pathParams.id
    const token = localStorage.getItem("token")
    const [detail, setDetail] = useState({})
    const [candidates, setCandidates] = useState([])
    const [approveds, setApproveds] = useState([])
    useProtectPage(history, "/login")


    useEffect(() => {
        getTripDetail()
    }, [])

    const getTripDetail = async () => {

        try {
            const response = await axios.get(`${baseUrl}/trip/${id}`, {
                headers: {
                    auth: token
                }
            })

            console.log(response.data.trip)
            setDetail(response.data.trip)
            setApproveds(response.data.trip.approved)
            setCandidates(response.data.trip.candidates)

        } catch (error) {
            console.log(error)
            alert("Aconteceu um erro. Sentimos muito! Volte mais tarde!")

        }
    }

    const decideCandidate = async (choice, candidateId) => {

        const body = {
            approve: choice
        }

        try {
            const response = await axios.put(`${baseUrl}/trips/${id}/candidates/${candidateId}/decide`, body, {
                headers : {
                    auth: token
                }
            })

            getTripDetail()

        } catch (error) {
            alert("Aconteceu um erro! Sentimos muito! Tente de novo mais tarde!")
        }
    }

    const listCandidates = candidates.map((candidate) => {
        return (
            <Card2 key={candidate.id}>
                <Info>
                    <p>Nome: {candidate.name}</p>
                    <p>Profissão: {candidate.profession}</p>
                    <p>Idade: {candidate.age}</p>
                    <p>País: {candidate.country}</p>
                    <p>Texto de Candidatura: {candidate.applicationText}</p>
                </Info>
                <div>
                    <img src={add} onClick={() => decideCandidate(true, candidate.id)} />
                    <img src={deny} onClick={() => decideCandidate(false, candidate.id)} />
                </div>
            </Card2>
        )

    })

    const listApproved = approveds.map((approved) => {
        return (<li key={approved.id}>{approved.name}</li>)
    })

    return (
        <Container>
            <Central>
                <h2>{detail.name}</h2>
                <Card>
                    <p>Nome: {detail.name}</p>
                    <p>Descrição: {detail.description}</p>
                    <p>Planeta: {detail.planet}</p>
                    <p>Duração: {detail.durationInDays} dias</p>
                    <p>Data: {detail.date}</p>
                </Card>
                <button onClick={() => props.goToBack(history)}>Voltar</button>
                <h3>Candidatos Pendentes:</h3>
                {listCandidates <= 0 ? <p>Não há candidatos...</p> : listCandidates}
                {/* {listCandidates} */}
                <h3>Candidatos Aprovados:</h3>
                <Card3>

                    {listApproved <= 0 ? <p>Não há candidatos aprovados...</p> : listApproved}
                    {/* <ul>
                        {listApproved}
                    </ul> */}
                </Card3>
            </Central>
        </Container>
    )
}

export default TripDetailsPage;