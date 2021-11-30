import React, { useState } from "react";
import { DivPai, Header, Main, Footer } from './CardStyled'
import axios from "axios";


const Card = () => {
    const [usuario, setUsuario] = useState({})

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anna-quaranta"
    
    // const pegarUsuarios = async() =>{
    //     try{
    //         const response = await axios.get(`${baseUrl}/person`)
    //         console.log(response.data)

    //     }catch (erro){
    //         console.log(erro.response.data)

    //     }
    // }

    return (
        <DivPai>
            <Header>
                Nome da marca e botão para lista de matchs
            </Header>
            <Main>
                <img src="https://picsum.photos/400/400"/ >
               {/* {pegarUsuarios()} */}
            </Main>
            <Footer>
            </Footer>

        </DivPai>
    )
}

export default Card