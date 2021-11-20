import React from "react";
import TelaDeDetalhes from "./TelaDeDetalhes";
import styled from 'styled-components'


const DivPai = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 50px;
`
const CardMusica = styled.div`
    border: 1px solid white;
    width: 190px;
    height: 190px;
    text-align: center;
    color: white;
    font-size: 20px;

    button{
        width: 100px;
    }
`


class RenderizarCapaPlaylist extends React.Component {

    state = {
        tela: false,
        idDaPlaylist: "",
        nomeDaPlaylist: ""
    }

    // listaDeIds = this.props.estadoPlaylist.map((playlist) =>{
    //     return playlist.id
    // })

    // componentDidMount = () =>{
    //     console.log(this.listaDeIds)
    //     this.pegarMusicas(this.listaDeIds)
    // }

    // pegarMusicas = async (id) => {
    //     try {
    //         const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    //         const resposta = await axios.get(url, {
    //             headers: {
    //                 Authorization: "anna-quaranta-carver"
    //             }
    //         })
    //         this.setState({musicas: resposta})
    //         // console.log(this.state.musicas)
    //     } catch (erro) {
    //         console.log(erro)
    //     }


    // }

    mudarDeTela = (id,nome) => {
        this.setState({ tela: true, idDaPlaylist: id, nomeDaPlaylist: nome})
        console.log(this.state.tela)

    }

    render() {
        const cardsPlaylists = this.props.estadoPlaylist.map((playlist) => {
            return (
                <CardMusica key={playlist.id}>
                    <img src="https://picsum.photos/190/190" />
                    <button onClick={() => this.mudarDeTela(playlist.id, playlist.name)}>{playlist.name}</button>
                </CardMusica>

            )
        })

        if (this.state.tela === false) {
            return (
                <DivPai>{cardsPlaylists}</DivPai>)
        } else {
            return (
                <div>
                    <TelaDeDetalhes tela={this.state.tela} idDaPlaylist={this.state.idDaPlaylist} nomeDaPlaylist = {this.state.nomeDaPlaylist}/>
                </div>

            )
        }

    }
}

export default RenderizarCapaPlaylist