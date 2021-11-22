import React from "react";
import axios from "axios";
import styled from "styled-components";
import CadastroDeUsuario from "./CadastroDeUsuario";

const DivNomeEDelete = styled.div`
  display: flex;
`;

class ListaDeUsuarios extends React.Component {
  state = {
    usuarios: []
  };

  //-----------------------------------------------------------
  componentDidMount = () => {
    this.getUsuarios();
  };

  getUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "anna-quaranta-carver"
          }
        }
      )
      .then((resposta) => {
        this.setState({ usuarios: resposta.data });
        console.log(resposta.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  //----------------------------------------------------------------------

  deletarUsuario = (event) => {
      alert("Você clicou no botão")
      const id = event.target.value
      
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
            headers: {
              Authorization: "anna-quaranta-carver"
            },
            data: {
              source: id
            }
          }).then((resposta) => {
              alert("Você excluiu o usuario!");
              this.getUsuarios()
          }).catch((error) => {
              alert("Aconteceu um erro")
              console.log(error.response.data)
          })
  };

  render() {
    const nomeUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <DivNomeEDelete key={usuario.id}>
          <li>{usuario.name}</li>
          <button value = {usuario.id} onCLick={this.deletarUsuario}>X</button>
        </DivNomeEDelete>
      );
    });

    return (
      <div>
        <ul>{nomeUsuarios}</ul>
        <CadastroDeUsuario renderizar = {this.getUsuarios()}/>
      </div>
    );
  }
}

export default ListaDeUsuarios;
