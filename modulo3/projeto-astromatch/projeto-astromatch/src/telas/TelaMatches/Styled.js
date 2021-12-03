import styled from "styled-components";

export const DivPai = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 91%;


    button{
        height: 3vw;
        width: 100%;
        background-color: #bc8f8f;
        border: none;
        font-weight: bold;


        &:hover{
            background-color: #3a3030;
            color: #d4c0bf;
        }
    }
`

export const DivCards = styled.div`
    overflow-y: auto;
`
export const Card = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 1.5vw;
    font-weight: bold;

    &:hover{
        background-color: grey;
    }
`

export const Foto = styled.div`
    background-image: url(${props => props.imagem});
    background-size: cover;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 1.5vw;
`