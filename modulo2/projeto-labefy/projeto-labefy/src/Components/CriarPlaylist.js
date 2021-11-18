import React from "react";
import axios from "axios"
import styled from "styled-components"

const DivPai = styled.div`
    margin: 10px;
    display: flex;
    justify-content: space-between;

    input{
        width: 150px;
    }
`


export default class CriarPlaylist extends React.Component {
    state = {
        nomeDaPlaylist: ""
    }

    onChangeInputNome = (event) =>{
        console.log(this.state.nomeDaPlaylist)
        this.setState({nomeDaPlaylist: event.target.value})
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
            this.setState({nomeDaPlaylist:""})
            console.log(resposta)

        } catch (erro) {
            alert("Aconteceu um erro!")
            console.log(erro.response.data)
        }
    }

    render() {
        return (
            <DivPai>
                <input placeholder="Digite o nome da playlist" value={this.state.nomeDaPlaylist} onChange={this.onChangeInputNome} />
                <button onClick={this.createPlaylist}>Criar playlist</button>
            </DivPai>
        )
    }
}