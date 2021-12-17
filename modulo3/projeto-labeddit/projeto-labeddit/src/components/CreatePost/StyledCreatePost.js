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