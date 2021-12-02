import styled from "styled-components";

export const DivPai = styled.div`
    background-color: whitesmoke;
    width: 29%;
    height: 97%;
    border: 1px solid black;
    border-radius: 0.5vw;
    
`
//HEADER-----------------------------------------------------
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    height: 9%;
    padding: 0.5vw;
    font-size: 2vw;
    font-weight: bold;

    img{
        width: 2.5vw;
        cursor: pointer;
    }
`

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
    

    img{
        border-radius: 5vw;
        width: 80%;
        height: 85%;
    }
`

export const DivTexto = styled.div`
    border: 1px solid aliceblue; 
    color: white;
    padding: 10px;
`

//FOOTER---------------------------------------------------------
export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightcoral;
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
