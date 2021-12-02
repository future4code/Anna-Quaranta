import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";


const Card = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
`

const Foto = styled.div`
    background-image: url(${props => props.imagem});
    background-size: cover;
    border-radius: 50%;
    width: 50px;
    height: 50px;

`

const TelaMatches = (props) =>{
    const [match, setMatch] = useState([])

    useEffect(() => {
        pegarMatches()
    },[])

    const pegarMatches = async () => {
        const response = await axios.get(`${props.baseUrl}/matches`)
        console.log(response.data.matches)
        setMatch(response.data.matches)

    }

    const limparMatches = async () => {
        
        try{
            const response = await axios.put(`${props.baseUrl}/clear`)
            console.log(response.data)
            pegarMatches()

        }catch(erro){
            console.log(erro.response.data)
        }
    }

    const cardMatches = match.map((match) =>{
        return (
            <Card>
                <Foto imagem = {match.photo}/>
                <p>{match.name}</p>
            </Card>
        )
    })
    return(
        <div>
            {cardMatches}
            <button onClick={limparMatches}>Limpar Matches</button>
        </div>
    )
}

export default TelaMatches