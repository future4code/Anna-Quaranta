import styled from "styled-components";

export const Card = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40vw;
    height: 25vw;
`

export const Form = styled.form`
    width: 100%;
    height: 100%;

    input{
        width: 100%;
        height: 15%;
    }
    textarea{
        resize: none;
        width: 100%;
        height: 75%;
    }

    button{
        width: 100%;
        height: 10%;
        border:none;
    }
`
export const Header = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    padding: 0.5vw;
    height: 10%;

`
export const Footer = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5vw;

    img{
        cursor: pointer;
    }

`

export const Likes = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
`

export const Comments = styled.div`
    display: flex;
    
`