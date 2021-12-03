import React, { useState, useEffect } from "react";
import axios from "axios";
import { DivPai, DivCards, Card, Foto } from "./Styled"


const TelaMatches = (props) => {
    const [match, setMatch] = useState([])

    useEffect(() => {
        pegarMatches()
    }, [])

    const pegarMatches = async () => {

        try {
            const response = await axios.get(`${props.baseUrl}/matches`)
            console.log(response.data.matches)
            setMatch(response.data.matches)
        }catch(erro){
            alert("Sentimos muito. Aconteceu um erro! Volte mais tarde!")
        }
        

    }

    const limparMatches = async () => {

        try {
            const response = await axios.put(`${props.baseUrl}/clear`)
            console.log(response.data)
            pegarMatches()

        } catch (erro) {
            console.log(erro.response.data)
            alert("Sentimos muito. Aconteceu um erro! Volte mais tarde!")
        }
    }

    const cardMatches = match.map((match) => {
        return (
            <Card>
                <Foto imagem={match.photo} />
                <p>{match.name}</p>
            </Card>
        )
    })
    return (
        <DivPai>
            <DivCards>
                {cardMatches}
            </DivCards>
            <button onClick={limparMatches}>Limpar Matches</button>
        </DivPai>
    )
}

export default TelaMatches