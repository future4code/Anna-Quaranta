import React from "react";
import styled from 'styled-components';

const DivEstilizada = styled.div `
    border: 1px solid black;
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
`
const PEstilizada = styled.p `
    font-weight: bold;
    margin-right: 5px;

`

const CardPequeno = (props) => {
    return (
        <DivEstilizada>
            <PEstilizada>{props.texto}</PEstilizada>
            <p>{props.conteudo}</p>
        </DivEstilizada>
    )
}

export default CardPequeno;