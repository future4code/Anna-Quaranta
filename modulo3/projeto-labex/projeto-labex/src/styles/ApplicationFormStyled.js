import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 91vh;
`

export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 90%;
    width: 40%;
    background-color: #0274F5;
    border-radius: 2vw;

    h2{
        margin: 1vw;
        font-size: 2.5vw;
        color: white;
    }
`

export const Form = styled.form`
    border: 1px solid goldenrod;
    border-radius: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 80%;

    label{
        margin: 0.1vw;
    }
    input,select{
        width: 20vw;
        height: 2vw;
        border: 1px dotted lightslategray;
    }

    legend{
        margin: 0 0 0.2vw 0;
        color: white;
        font-size: 1vw;
    }

    input{
        padding: 0.5vw;
    }
`

export const Button = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 1vw;

    button{
        width: 40%;
        padding: 0.4vw;
    }
`
