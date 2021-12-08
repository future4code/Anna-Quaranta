import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { baseUrl } from "../constants/url";

const Card = styled.div`
    border: 1px solid black;
`
const TripDetailsPage = (props) => {
    const pathParams = useParams()
    const id = pathParams.id
    const history = useHistory()
    const [detail, setDetail] = useState({})
    const [candidates, setCandidates] = useState([{}])


    useEffect(() => {
        getTripDetail()
    }, [])

    const getTripDetail = async () => {

        const token = localStorage.getItem("token")

        try {
            const response = await axios.get(`${baseUrl}/trip/${id}`, {
                headers: {
                    auth: token
                }
            })

            console.log(response.data.trip)
            setDetail(response.data.trip)
            setCandidates(response.data.trip.candidates)

        } catch (error) {
            console.log(error.response)
            alert("Aconteceu um erro. Sentimos muito! Volte mais tarde!")
            
        }
    }


    const listCandidates = candidates.map((candidate) => {
        return (
            <Card>
                <p>Nome: {candidate.name}</p>
                <p>Profissão: {candidate.profission}</p>
                <p>Idade: {candidate.age}</p>
                <p>País: {candidate.country}</p>
                <p>Texto de Candidatura: {candidate.applicationText}</p>
            </Card>
        )
    })

    console.log(candidates)
    console.log(listCandidates)

    return (
        <div>
            <h2>{detail.name}</h2>
            <p>Name: {detail.name}</p>
            <p>Descrição: {detail.description}</p>
            <p>Planeta: {detail.planet}</p>
            <p>Duração: {detail.durationInDays} dias</p>
            <p>Data: {detail.date}</p>
            <button onClick={() => props.goToBack(history)}>Voltar</button>
            <h2>Candidatos Pendentes:</h2>
            {/* {listCandidates > 0? <p>Sem candidaturas pendentes</p> : {listCandidates} } */}
        </div>
    )
}

export default TripDetailsPage;