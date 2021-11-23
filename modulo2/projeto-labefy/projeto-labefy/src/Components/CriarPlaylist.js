import React from "react";
import styled from "styled-components"
import axios from "axios"

//------------------STYLED COMPONENTS ------------------------------

const CardPlaylist = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px dotted white;
    height: 20px;
    margin: 5px;
    padding: 10px;
    
    button{
      height: 20px;
    }

    
`

const DivPai = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const DivCriarPlaylist = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: 5px;
    height: 30;
    input{
        width: 140px;
        height: 20px;
        text-overflow: ellipsis;
    }
    button{
        height: 20px;
    }
`


class CriarPlaylist extends React.Component {

    state = {
        nomeDaPlaylist: ""
    }
  
    //-------------------------------------------------FUNÇÃO PARA CRIAR PLAYLISTS

  onChangeInputNome = (event) => {
    this.setState({ nomeDaPlaylist: event.target.value })
    console.log(this.state.nomeDaPlaylist)
  }

  createPlaylist = async () => {
    try {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      const body = {
        name: this.state.nomeDaPlaylist
      }
      const resposta = await axios.post(url, body, {
        headers: {
          Authorization: "anna-quaranta-carver"
        }
      })


      alert("Playlist criada!")
      this.setState({ nomeDaPlaylist: "" })
      this.props.pegarPlaylists()

    } catch (erro) {
      alert("Aconteceu um erro!")
      console.log(erro.response.data)
    }
  }

  //-----------------------------------------FUNÇÃO PARA DELETAR PLAYLISTS

  deletarPlaylist = async (id) => {

    alert('Playlist deletada com sucesso!')

    try {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

      const resposta = await axios.delete(url, {
        headers: {
          Authorization: "anna-quaranta-carver"
        }
      })

      this.props.pegarPlaylists()

    } catch (error) {
      alert("Aconteceu um erro. Sentimos muito pelo ocorrido. Volte mais tarde!")
      console.log(error.response.data)
    }
  }
  
    //-----------------------------------------------------------------RENDER

    render() {

        // ----- MAP PARA PEGAR NOME DA LISTA DE PLAYLISTS
        const listaNomesPlaylists = this.props.estado.map((playlist) => {
            return (
                <CardPlaylist key={playlist.id}>
                    {playlist.name}
                    <button onClick={() => this.deletarPlaylist(playlist.id)}>X</button>
                </CardPlaylist>

            )
        })

        return (
            <DivPai>

                <DivCriarPlaylist>
                    {/* INPUT E BOTÃO DE CRIAR PLAYLIST */}
                    <input placeholder="Digite um nome:" value={this.state.nomeDaPlaylist} onChange={this.onChangeInputNome} />


                    <button onClick={this.createPlaylist}>Criar playlist</button>
                </DivCriarPlaylist>

                {/* RENDERIZAÇÃO DAS PLAYLISTS */}
                {listaNomesPlaylists}
            </DivPai>
        )
    }
}


export default CriarPlaylist;