import React from "react"
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Final from "./components/Final"
import styled from "styled-components"
import { render } from "@testing-library/react"

const DivEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () =>{
    switch (this.state.etapa){
      case 1: 
        return <Etapa1/>
      case 2:
        return <Etapa2/>
      case 3:
        return <Etapa3/>
      default:
        return <Final/>
    }
  }
  irParaProximaEtapa = () =>{
    const novaEtapa = this.state.etapa + 1
    this.setState({etapa:novaEtapa})
  }
  render() {

    return (
      <DivEstilizada>
        
        {this.renderizaEtapa()}
        {this.state.etapa < 4 && <button onClick = {this.irParaProximaEtapa}>Próxima etapa</button>}

      </DivEstilizada>
    )
  }

}

export default App
