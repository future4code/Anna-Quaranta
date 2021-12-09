import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 91vh;
    background-image: url("https://images.unsplash.com/photo-1503197979108-c824168d51a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80");
    background-size: cover;
    background-position-y: top;
`
export const Card = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 70%;
    background-color: rgba(0,0,255,0.2);
    color: white;

    h1{
        font-size: 7vw;
    }

    button{
        width: 30%;
        height: 10%;
        background-color: rgba(0,0,255,0.8);
        border: 2px double white;
        color: whitesmoke;
        font-size: 1.2vw;
        font-weight: bold;

        &:hover{
            background-color: rgba(255,255,255,0.8);
            border: 2px double rgba(0,0,255,0.8);
            color: rgba(0,0,255,0.8);
        }
    }
`
