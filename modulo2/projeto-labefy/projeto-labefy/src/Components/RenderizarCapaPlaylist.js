import React from "react";
import TelaDeDetalhes from "./TelaDeDetalhes";
import styled from 'styled-components'


const DivPai = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 50px;
    margin: 10px;
`

const DivPai2 = styled.div`
    /* background-color: rgba(255,255,255,0.2); */
    width: 100vw;
    height: 100vh;
    color: white;
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

    button:hover{
        background-color: blue;
        color:white
    }
    
    img{
        width: 190px;
        height: 190px;
    }
`


class RenderizarCapaPlaylist extends React.Component {

    state = {
        tela: false,
        idDaPlaylist: "",
        nomeDaPlaylist: ""
    }

  

    mudarDeTela = (id,nome) => {
        this.setState({ tela: true, idDaPlaylist: id, nomeDaPlaylist: nome})
        console.log(this.state.tela)

    }

    render() {
        const cardsPlaylists = this.props.estadoPlaylist.map((playlist) => {
            return (
                <CardMusica key={playlist.id}>
                    <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v932-ning-52-x.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=5b07a6aad583af34041597174700313b" />
                    <button onClick={() => this.mudarDeTela(playlist.id, playlist.name)}>{playlist.name}</button>
                </CardMusica>

            )
        })

        if (this.state.tela === false) {
            return (
                <DivPai>{cardsPlaylists}</DivPai>)
        } else {
            return (
                <DivPai2>
                    <TelaDeDetalhes tela={this.state.tela} idDaPlaylist={this.state.idDaPlaylist} nomeDaPlaylist = {this.state.nomeDaPlaylist}/>
                </DivPai2>

            )
        }

    }
}

export default RenderizarCapaPlaylist