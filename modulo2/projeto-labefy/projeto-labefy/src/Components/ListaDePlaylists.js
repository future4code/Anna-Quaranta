import React from "react";
import axios from 'axios'
import styled from 'styled-components'

//------------------STYLED COMPONENTS ------------------------------

const CardPlaylist = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    height: 20px;
    margin: 5px;
    padding: 10px;
`

const DivPai = styled.div`
    margin: 0px;
`

//------------------INICIO DA SINXTAXE DA CLASSE ---------------------------


export default class ListaDePlaylists extends React.Component {

    state = {
        playlists: []
    }

    componentDidMount = () => {
        this.pegarPlaylists()
    }

    //-------------------------------------------- FUNÇÃO PARA PEGAR PLAYLISTS

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

    deletarPlaylist = async (id) =>{

        alert('Playlist deletada com sucesso!')
        
        try{
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
            
            const resposta = await axios.delete(url,{
                headers : {
                    Authorization: "anna-quaranta-carver"
                }
            })

           this.pegarPlaylists()
            
        } catch (error){
            alert("Aconteceu um erro. Sentimos muito pelo ocorrido. Volte mais tarde!")
            console.log(error.response.data)
        }
    }
    //-----------------------------------------------------------------

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
                {listaNomesPlaylists}
            </DivPai>
        )
    }
}