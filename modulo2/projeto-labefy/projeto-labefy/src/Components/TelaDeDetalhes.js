import React from "react";
import axios from "axios"
import styled from "styled-components"

class TelaDeDetalhes extends React.Component {
    state = {
        musicas: []
    }

    componentDidMount = () => {
        console.log(this.props.idDaPlaylist)
        this.pegarMusicas(this.props.idDaPlaylist)
    }

    pegarMusicas = async (id) => {
        try {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

            const resposta = await axios.get(url, {
                headers: {
                    Authorization: "anna-quaranta-carver"
                }
            })

            this.setState({ musicas: resposta.data.result.tracks })
            console.log(this.state.musicas)

        } catch (erro) {
            console.log(erro)
        }
    }

    render() {

        const listaDeMusicas = this.state.musicas.map((musica) => {
            return (
                <div key={musica.id}>
                    {musica.name}
                </div>

            )
        })

        return (

            <div>

                {listaDeMusicas}

            </div>
        )
    }
}

export default TelaDeDetalhes