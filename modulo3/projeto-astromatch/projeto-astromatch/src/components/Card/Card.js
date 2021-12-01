import React, { useState, useEffect } from "react";
import { DivPai, Header, Main, CardUsuario, DivTexto, Footer, Buttons, Match, Passar } from './CardStyled'
import axios from "axios";

// ----------------------------- STYLED COMPONENT

const Card = () => {
    const [perfilUsuario, setPerfilUsuario] = useState({})
    const [match, setMatch] = useState([])

    useEffect(() => {
        pegarPerfil()
    }, [])

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anna-quaranta"

    const pegarPerfil = async () => {
        try {
            const response = await axios.get(`${baseUrl}/person`)
            // console.log(response.data.profile)
            setPerfilUsuario(response.data.profile)
            // console.log(perfilUsuario)
        } catch (erro) {
            console.log(erro)

        }
    }


    const darMatch = () => {
        console.log(match)
        const listaMatchs = [...match, perfilUsuario]
        setMatch(listaMatchs)
        console.log(match)
        pegarPerfil()

    }

    return (
        <DivPai>
            <Header>
                Nome da marca e botão para lista de matchs
            </Header>

            <Main>

                <CardUsuario>
                    <img src={perfilUsuario.photo} />
                    <DivTexto>
                        <p>{perfilUsuario.name}, {perfilUsuario.age}</p>
                        <p key={perfilUsuario.id}>{perfilUsuario.bio}</p>
                    </DivTexto>
                </CardUsuario>

            </Main>

            <Footer>
                <Buttons>
                    <Match onClick={() => { darMatch() }}>♥️</Match>
                    <Passar onClick={() => pegarPerfil()}>X</Passar>
                </Buttons>

            </Footer>

        </DivPai>
    )
}

export default Card