import React from "react"
import styled from "styled-components"

const DivEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Etapa3 extends React.Component{
    render(){
        return(
            <DivEstilizada>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

                <p>5. Por que você não terminou um curso de graduação?</p>
                <input type="text"/>
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option selected>Nenhum</option>
                    <option>Entre 1 e 2</option>
                    <option>Mais de 2</option>
                </select>
            </DivEstilizada>
        )
    }
}

export default Etapa3