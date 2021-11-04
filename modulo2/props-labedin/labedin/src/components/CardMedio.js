import React from "react";
import styled from "styled-components";

const ContainerEstilizado = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3px;
    margin: 10px 0
`

const PEstilizado = styled.div`
    display: flex;
    justify-content: space-around;
    font-weight: bold;
    border: 2px black dashed;
`
const CardMedio = (props) =>{
    return (
        <ContainerEstilizado>
            <PEstilizado>{props.habilidade1}</PEstilizado>
            <PEstilizado>{props.habilidade2}</PEstilizado>
            <PEstilizado>{props.habilidade3}</PEstilizado>
        </ContainerEstilizado>
    )
}

export default CardMedio