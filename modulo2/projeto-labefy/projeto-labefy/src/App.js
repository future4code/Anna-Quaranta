import React from "react";
import styled from "styled-components"
import CriarPlaylist from "./Components/CriarPlaylist";
import ListaDePlaylists from "./Components/ListaDePlaylists";
import PlaylistAberta from "./Components/PlaylistAberta"


//------------STYLED COMPONENTS---------------------------------------------------

const DivPai = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  height: 97vh;
  display: flex;
  flex-direction: column;


`
const ContainerPaiCorpo = styled.div`
  display: flex;
  height: 80%;
  width: 100%;
  background-color: chocolate;
`

const ContainerEsquerdo = styled.nav`
  background-color: aqua;
  width: 20vw;
  height: 100%;
  overflow-y: auto;
`
const ContainerMain = styled.main`
  background-color: blueviolet;
  width: 78.8vw;
  height: 100%;
`

const ContainerFooter = styled.div`
  border: 2px solid green;
  height: 20%; 
  background-color: darkcyan;
`

//-----------------------------------------------------------------------------------

export default class App extends React.Component {
  render() {
    return (
      <DivPai>
        <ContainerPaiCorpo>

          <ContainerEsquerdo>
            <button>Início</button>
            <CriarPlaylist/>
            <ListaDePlaylists/>

          </ContainerEsquerdo>

          <ContainerMain>
          </ContainerMain>
        </ContainerPaiCorpo>


        <ContainerFooter>

        </ContainerFooter>
      </DivPai>
    )
  }
}