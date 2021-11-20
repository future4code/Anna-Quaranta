import React from "react";
import styled from "styled-components"
import CriarPlaylist from "./Components/CriarPlaylist";
import { createGlobalStyle } from 'styled-components';
import axios from 'axios'
import RenderizarCapaPlaylist from "./Components/RenderizarCapaPlaylist";



//------------STYLED COMPONENTS---------------------------------------------------

const DivPai = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p {
    margin: 0;
  }
`

const ContainerPaiCorpo = styled.div`
  display: flex;
  height: 80%;
  background-color: chocolate;
`

const ContainerEsquerdo = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  width: 20%;
  height: 100%;
  overflow-y: auto;
`
const ContainerMain = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
  overflow-y: auto;
  background: linear-gradient(180deg, rgb(191, 24, 46), rgb(26, 26, 26));
`

const ContainerFooter = styled.div`
  border-top: 1px solid white;
  height: 20%; 
  background-color: rgb(26, 26, 26);

`
//-----------------------------------------------------------------------------------

export default class App extends React.Component {
  state = {
    playlists: [],
  }

  componentDidMount = () => {
    this.pegarPlaylists()
  }


  //---------------------------------------- FUNÇÃO PARA PEGAR PLAYLISTS E ATUALIZAR
  pegarPlaylists = async () => {

    try {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

      const resposta = await axios.get(url, {
        headers: {
          Authorization: "anna-quaranta-carver"
        }
      })

      this.setState({ playlists: resposta.data.result.list })

    } catch (erro) {
      console.log(erro)
    }
  }




  //----------------------------------------- RENDER

  render() {
    // const listaDeIds = this.state.playlists.map((playlist) =>{
    //   return playlist.id
    // })

    return (
      <DivPai>
        <GlobalStyle />
        <ContainerPaiCorpo>

          <ContainerEsquerdo>
            <button>Início</button>
            <button>Buscar</button>
            <button>Sua Biblioteca</button>
            <CriarPlaylist estado={this.state.playlists} pegarPlaylists={this.pegarPlaylists} />

          </ContainerEsquerdo>

          <ContainerMain>
            <RenderizarCapaPlaylist estadoPlaylist={this.state.playlists} />
          </ContainerMain>

        </ContainerPaiCorpo>

        <ContainerFooter>

        </ContainerFooter>
      </DivPai>
    )
  }
}