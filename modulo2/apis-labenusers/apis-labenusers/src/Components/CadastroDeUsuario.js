import React from "react";
import axios from "axios";

class CadastroDeUsuario extends React.Component {
  state = {
    inputNome: "",
    inputEmail: ""
  };

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
    console.log(this.state.inputNome);
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
    console.log(this.state.inputEmail);
  };

  criarUsuario = () =>{
      const body = {
          name: this.state.inputNome,
          email: this.state.inputEmail
      }

      axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
          headers: {
              Authorization: "anna-quaranta-carver"
          }
      }).then((resposta) =>{
          this.setState({inputNome: '', inputEmail: ''})
          alert('Usuário criado!')
          this.props.renderizar()
          
      })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Nome"
          value={this.state.inputNome}
          onChange={this.onChangeInputNome}
        />
        <input
          type="text"
          placeholder="Email"
          value={this.state.inputEmail}
          onChange={this.onChangeInputEmail}
        />
        <button onClick={this.criarUsuario}>Criar usuário</button>
      </div>
    );
  }
}

export default CadastroDeUsuario;
