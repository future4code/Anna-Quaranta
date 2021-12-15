import styled from "styled-components";

export const CreateComment = styled.form`
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    width: 40vw;
    min-height: 5vw;

    textarea{
        resize: none;
        overflow-y: hidden;
        width: 80%;
        wrap: wrap;
        border: none;
    }
    button{
        background: none;
        border: none
    }
`