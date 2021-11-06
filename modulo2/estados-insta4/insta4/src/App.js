import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const InputEstilizada = styled.input`
  margin: 5px 0;
`
class App extends React.Component {
  state = {

    posts : [
      {
        nome : "paulinha",
        fotoDoUsuario : "https://picsum.photos/50/50",
        fotoDoPost : "https://picsum.photos/200/150?a=1"
      },
      {
        nome :"isabella",
        fotoDoUsuario :"https://picsum.photos/50/50?a=4",
        fotoDoPost :"https://picsum.photos/200/150?a=1"
      },
      {
        nome : "beatriz",
        fotoDoUsuario : "https://picsum.photos/50/50?a=2",
        fotoPost : "https://picsum.photos/200/150?a=1"
      },
    ],

    inputNome: '',
    inputFotoUsuario: '',
    inputFotoPost: ''
  
  
  }


  onChangeSalvarNome = (event) =>{
    this.setState({inputNome : event.target.value})
    console.log(event.target.value)

  }
  onChangeSalvarFotoDoUsuario = (event) =>{
    this.setState({inputFotoUsuario : event.target.value})
    console.log(event.target.value)

  }
  onChangeSalvarFotoPost= (event) =>{
    this.setState({inputFotoPost : event.target.value})
    console.log(event.target.value)

  }

  onClickEnviarBotao = () => {
    const novoObjeto = {nome: this.state.inputNome,
      fotoDoUsuario : this.state.inputFotoUsuario,
      fotoDoPost : this.state.inputFotoPost
    }

    const novoPost = [...this.state.posts, novoObjeto]

    this.setState({posts: novoPost})
  }
  render() {

    const listaDePosts = this.state.posts.map((post,index) =>{
      return (
        <Post key = {index}
          nomeUsuario = {post.nome}
          fotoUsuario = {post.fotoDoUsuario}
          fotoPost = {post.fotoPost}
        />
      )

    })

    return (
      <MainContainer>
        {listaDePosts}
        <InputEstilizada placeholder="Nome" value={this.state.inputNome} onChange={this.onChangeSalvarNome}/>

        <InputEstilizada placeholder="Foto do Usuario" value={this.state.inputFotoUsuario} onChange={this.onChangeSalvarFotoDoUsuario}/>

        <InputEstilizada placeholder="Foto do Post" value={this.state.inputFotoPost} onChange = {this.onChangeSalvarFotoPost}/>

        <button onClick = {this.onClickEnviarBotao}>Enviar</button>


      </MainContainer>
    );
  }
}

export default App;
