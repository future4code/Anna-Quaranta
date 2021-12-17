import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;

    img{
        width: 80%;
    }
`

export const Central = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 35vw;
    height: 45vw;
    margin-bottom: 3vw;

    h2{
        font-size: 3vw;
        margin: 2vw;
    }
    img{
        margin-top: 4vw;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 75%;
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 10vw;
    margin-bottom: 1vw;

`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 6vw;
`
