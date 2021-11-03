import React from 'react';
import styled from 'styled-components';


const ContainerBigCardEstilizado = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ImagemBigCardEstilizado = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const H4BigCardEstilizado = styled.h4`
    margin-bottom: 15px;
`

const DivBigCardEstilizado = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <ContainerBigCardEstilizado>

            <ImagemBigCardEstilizado src={ props.imagem } />

            <DivBigCardEstilizado>

                <H4BigCardEstilizado>{ props.nome }</H4BigCardEstilizado>
                <p>{ props.descricao }</p>

            </DivBigCardEstilizado>

        </ContainerBigCardEstilizado>
    )
}

export default CardGrande;