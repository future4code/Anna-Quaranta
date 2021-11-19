import React from "react";
import axios from "axios"
import styled from "styled-components"

//------------------STYLED COMPONENTS ------------------------------

const CardPlaylist = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    height: 20px;
    margin: 5px;
    padding: 10px;
`

// const DivPai = styled.div`
//     margin: 0px;
// `

const DivPai = styled.div`
    margin: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const DivCriarPlaylist = styled.div`
    display: flex;
    justify-content: space-around;

    height: 30;
    input{
        width: 140px;
        text-overflow: ellipsis;
    }
    button{
        height: 20px;
    }
`


export default class CriarPlaylist extends React.Component {
    state = {
        nomeDaPlaylist: "",
        playlists: []
    }

    //---------------------------------------- FUNÇÃO PARA PEGAR PLAYLISTS E ATUALIZAR

    componentDidMount = () => {
        this.pegarPlaylists()
    }


    pegarPlaylists = async () => {

        try {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

            const resposta = await axios.get(url, {
                headers: {
                    Authorization: "anna-quaranta-carver"
                }
            })

            this.setState({ playlists: resposta.data.result.list })
            console.log(resposta.data.result.list)

        } catch (erro) {

            alert("Aconteceu um erro")
            console.log(erro)
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

            this.pegarPlaylists()

        } catch (error) {
            alert("Aconteceu um erro. Sentimos muito pelo ocorrido. Volte mais tarde!")
            console.log(error.response.data)
        }
    }
    //-------------------------------------------------FUNÇÃO PARA CRIAR PLAYLISTS

    onChangeInputNome = (event) => {
        console.log(this.state.nomeDaPlaylist)
        this.setState({ nomeDaPlaylist: event.target.value })
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
            this.pegarPlaylists()
            console.log(resposta)

        } catch (erro) {
            alert("Aconteceu um erro!")
            console.log(erro.response.data)
        }
    }

    //-----------------------------------------------------------------RENDER

    render() {

        // ----- MAP PARA PEGAR NOME DA LISTA DE PLAYLISTS
        const listaNomesPlaylists = this.state.playlists.map((playlist) => {
            return (
                <CardPlaylist>
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