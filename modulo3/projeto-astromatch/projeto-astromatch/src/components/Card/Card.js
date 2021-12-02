import React, { useState, useEffect } from "react";
import { DivPai, Header} from './CardStyled'
import axios from "axios";
import telamatch from '../../uteis/telamatch.svg'
import telaprincipal from '../../uteis/telaprincipal.svg'
import TelaMatches from "../../telas/TelaMatches";
import TelaPrincipal from"../../telas/TelaPrincipal"

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
            console.log(erro)
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

    //------------------------------------------------------------------------------------------------

    return (
        <DivPai>
            <Header>
                <img src={telaprincipal} onClick={() => setTela(true)} props = {tela}/>
                <p>Match Perfeito</p>
                <img src={telamatch} onClick={() => setTela(false)} />
            </Header>
            {trocarTela()}
        </DivPai>
    )
}

export default Card