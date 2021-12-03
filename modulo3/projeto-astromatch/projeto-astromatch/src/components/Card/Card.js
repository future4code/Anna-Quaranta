import React, { useState, useEffect } from "react";
import { DivPai, Header} from './CardStyled'
import axios from "axios";
import telamatch from '../../uteis/telamatch.svg'
import telaprincipal from '../../uteis/telaprincipal.svg'
import TelaMatches from "../../telas/TelaMatches/TelaMatches";
import TelaPrincipal from"../../telas/TelaPrincipal/TelaPrincipal"

// ----------------------------- STYLED COMPONENT

const Card = () => {
    const [perfilUsuario, setPerfilUsuario] = useState({})
    const [tela, setTela] = useState(true)

    //------------------------FUNÇÕES
    useEffect(() => {
        pegarPerfil()
    }, [])

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anna-quaranta"

    const pegarPerfil = async () => {
        try {
            const response = await axios.get(`${baseUrl}/person`)
            setPerfilUsuario(response.data.profile)

        } catch (erro) {
            alert("Sentimos muito. Aconteceu um erro! Volte mais tarde!")
            console.log(erro.response.data)
        }
    }


    const darMatch = async (id, choice) => {
        const body = {
            id: id,
            choice: choice
        }
        
        try {
            const response = await axios.post(`${baseUrl}/choose-person`, body)
            pegarPerfil()

        } catch (erro) {
            console.log(erro.response.data)
            alert("Sentimos muito. Aconteceu um erro! Volte mais tarde!")
        }
    }

    const trocarTela = () => {
        switch (tela) {
            case false:
                return <TelaMatches baseUrl={baseUrl} />
            default:
                return <TelaPrincipal perfilUsuario={perfilUsuario} darMatch={darMatch} />
        }
    }

    //--------------------------------------------------------------------------------------

    return (
        <DivPai>
            <Header>
                <img src={telaprincipal} onClick={() => setTela(true)} props = {tela}/>
                <h1>Match Perfeito</h1>
                <img src={telamatch} onClick={() => setTela(false)} />
            </Header>
            {trocarTela()}
        </DivPai>
    )
}

export default Card