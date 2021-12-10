import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55vw;
`

export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 50vw;
    width:38%;
    background-color: #0274F5;
    border-radius: 2vw;

    h2{
        margin: 1vw;
        font-size: 3vw;
        color: white;
        text-align: center;
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
    height: 70%;
    padding: 0.5vw;

    label{
        margin: 0.2vw;
    }
    input,select{
        width: 23vw;
        height: 2.5vw;
        border: 2px dotted lightslategray;
    }

    textarea{
        width: 23vw;
        height: 6vw;
        resize: none;
        padding: 0.3vw;
    }

    legend{
        margin: 0 0 0.2vw 0;
        color: white;
        font-size: 1.2vw;
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
        background-color: rgba(0,0,255,0.8);
        border: 2px groove white;
        color: whitesmoke;
        font-size: 1.5vw;

        &:hover{
            background-color: rgba(255,255,255,0.8);
            border: 2px dotted rgba(0,0,255,0.8);
            color: rgba(0,0,255,0.8);
        }
    }
`
