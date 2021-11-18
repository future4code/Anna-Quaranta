import React from "react";
import CadastroDeUsuario from "./Components/CadastroDeUsuario";
import ListaDeUsuarios from "./Components/ListaDeUsuarios";

class App extends React.Component {
  state = {
    TelaPrincipal: true
  };

  trocarDeTela = () => {
    this.setState({ TelaPrincipal: !this.state.TelaPrincipal });
  };
  render() {
    return (
      <div>
        <button onClick={this.trocarDeTela}>Trocar de Tela</button>
        {this.state.TelaPrincipal === true ? (
          <CadastroDeUsuario />
        ) : (
          <ListaDeUsuarios />
        )}
      </div>
    );
  }
}

export default App;
