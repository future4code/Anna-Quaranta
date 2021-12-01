import styled from "styled-components";

export const DivPai = styled.div`
    background-color: whitesmoke;
    width: 30%;
    height: 97%;
    border: 1px solid black;
    border-radius: 0.5vw;
    
`
//HEADER-----------------------------------------------------
export const Header = styled.div`
    background-color: pink;
    width: 100%;
    height: 10%;
`

// MAIN -------------------------------------------------------
export const Main = styled.div`
    background-color: blueviolet;
    width: 100%;
    height: 75%;
`
export const CardUsuario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    width: 100%;
    height: 100%;
    background: url({props.foto});

    img{
        border-radius: 5vw;
        width: 80%;
        height: 85%;
    }
`

export const DivTexto = styled.div`
    border: 1px solid aliceblue; 
`

//FOOTER---------------------------------------------------------
export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightcoral;
    height: 15%;

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
