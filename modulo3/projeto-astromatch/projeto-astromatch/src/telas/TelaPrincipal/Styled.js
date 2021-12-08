import styled from "styled-components"

// MAIN -------------------------------------------------------
export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 78%;
`
export const CardUsuario = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: 1px solid white;
    border-radius: 0.5vw;
    width: 90%;
    height: 90%;
    background-image: url(${props => props.imagem});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 0 1em black;
`

export const DivTexto = styled.div`
    padding: 10px;
    border: 1px solid aliceblue; 
    background-color: rgba(255,255,255, 0.5);
    color: #3a3030;


    h2{
        font-size: 2vw;   
    }

    h3{
        font-size: 1.4vw;
    }
    
`

//FOOTER---------------------------------------------------------
export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bc8f8f;
    height: 13%;

    button{
        border-radius: 50%;
        width: 60px;
        height: 60px;
        margin: 10px;
        font-size: 30px;
        transform: scale(1.0);
        transition: all 0.2s ease 0s;

        &:hover{
            width: 61px;
            height: 61px;
            transform: scale(1.2);
            transition: all 0.2s ease 0s;
        }
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 15vw;
`

export const Match = styled.button`
    border: 2px solid green;
    color: green;

    &:hover{
        background: green;
        color: white;
    }
`

export const Passar = styled.button`
    border: 2px solid red;
    color: red;

    &:hover{
        background: red;
        color: white;
    }

`
