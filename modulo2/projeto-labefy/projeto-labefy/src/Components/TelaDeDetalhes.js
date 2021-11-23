import React from "react";
import axios from "axios"
import styled from "styled-components"

const DivPai = styled.div`
    border: white 1px solid;
    display: flex;
    height: 100%;
    flex-direction: column;

    DivMusicas {
        align-items: center;
    }

`

const DivTitulo = styled.div`
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid white;
    background-color: rgba(0,7,135,0.5);
    
    h1{
        font-size: 8rem;
        margin: 10px;
        padding:10px;
        color: white;
        text-shadow: 0 0 0.2em #87F, 0 0 0.2em #87F,
        0 0 0.2em #87F;
        
    }
`

const DivMusicas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid whitesmoke;
    background-color: rgba(0,0,0,0.2);
`

const CardMusica = styled.div`
    border: 1px solid white;
    width: 50vw;
    justify-content: space-between;
    font-size: 20px;
    h3,h4{
        margin: 0px;
    }
    padding: 10px;
`

const AdicionarMusica = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    height: 50px;
    background: radial-gradient(rgb(0, 89, 183), rgb(0, 0, 0));
    color: white;

    p{
        font-size: 20px
    }
    p, input{
        margin: 10px;
    }
    input{
        text-align: center;
    }

`



class TelaDeDetalhes extends React.Component {
    state = {
        musicas: [],
        inputNomeDaMusica: "",
        inputArtista: "",
        inputUrl: "",
    }

    //PEGAR MUSICAS -------------------------------------------------------------------------------------

    componentDidMount = () => {
        // console.log(this.props.idDaPlaylist)
        this.pegarMusicas(this.props.idDaPlaylist)
    }

    pegarMusicas = async (id) => {
        try {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

            const resposta = await axios.get(url, {
                headers: {
                    Authorization: "anna-quaranta-carver"
                }
            })

            this.setState({ musicas: resposta.data.result.tracks })
            // console.log(this.state.musicas)

        } catch (erro) {
            console.log(erro)
        }
    }

    //ADICIONAR MUSICA--------------------------------------------------------------------------------

    onChangeNomeDaMusica = (event) => {
        this.setState({ inputNomeDaMusica: event.target.value })
        console.log(this.state.inputNomeDaMusica)
    }
    onChangeNomeDoArtista = (event) => {
        this.setState({ inputArtista: event.target.value })
        console.log(this.state.inputArtista)
    }
    onChangeUrl = (event) => {
        this.setState({ inputUrl: event.target.value })
        console.log(this.state.inputUrl)
    }

    adicionarMusica = async (id) => {
        try {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

            const body = {
                name: this.state.inputNomeDaMusica,
                artist: this.state.inputArtista,
                url: this.state.inputUrl
            }

            const resposta = await axios.post(url, body, {
                headers: {
                    Authorization: "anna-quaranta-carver"
                }
            })

            this.setState({ inputNomeDaMusica: "", inputArtista: "", inputUrl: "" })
            alert("Música adicionada!")
            this.componentDidMount()

        } catch (erro) {
            console.log(erro.response.data)
        }
    }

    //DELETAR MUSICA----------------------------------------------------------------------------------

    deletarMusica = async (idPlaylist, idMusica) => {
        try {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${idMusica}`

            const resposta = await axios.delete(url, {
                headers: {
                    Authorization: "anna-quaranta-carver"
                }
            })
            alert("Música deletada com sucesso!")
            this.componentDidMount()

        } catch (error) {

        }
    }

    render() {

        const listaDeMusicas = this.state.musicas.map((musica) => {
            return (
                <CardMusica key={musica.id}>
                    <h3>{musica.name}</h3>
                    <h4>{musica.artist}</h4>
                    <button>Play</button>
                    <button onClick={() => this.deletarMusica(this.props.idDaPlaylist, musica.id)}>X</button>
                </CardMusica>

            )
        })

        return (

            <DivPai>
                <AdicionarMusica>
                    <p>Adicionar músicas:</p>
                    <input placeholder="Nome da música" value={this.state.inputNomeDaMusica} onChange={this.onChangeNomeDaMusica} />
                    <input placeholder="Artista" value={this.state.inputArtista} onChange={this.onChangeNomeDoArtista} />
                    <input placeholder="Url da Música" value={this.state.inputUrl} onChange={this.onChangeUrl} />
                    <button onClick={() => this.adicionarMusica(this.props.idDaPlaylist)}>Enviar</button>
                </AdicionarMusica>

                <DivTitulo>
                    <h1>{this.props.nomeDaPlaylist}</h1>
                </DivTitulo>
                <DivMusicas>{listaDeMusicas}</DivMusicas>


            </DivPai>
        )
    }
}

export default TelaDeDetalhes