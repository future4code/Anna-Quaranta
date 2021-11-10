import React from "react";
import styled from "styled-components";

const DivEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


class Etapa2 extends React.Component{
    render(){
        return(
            <DivEstilizada>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

                <p>5. Qual curso?</p>
                <input type="text"/>
                <p>6. Qual a unidade de ensino?</p>
                <input type="text"/>

            </DivEstilizada>
        )
    }
}

export default Etapa2