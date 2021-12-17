import { TextField } from "@material-ui/core";
import styled from "styled-components";


export const Container = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgrey;
`

export const ContainerTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    width: 38vw;
    height: 5vw;
    margin: 2vw;
    padding: 0.5vw;
`

export const MyInput = styled(TextField)({
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 55,
    width: 450

});

// export const Header = styled.div`
//     border: 1px solid black;
//     display: flex;
//     align-items: center;
//     padding: 0.5vw;
//     height: 10%;

// `
// export const Footer = styled.div`
//     border: 1px solid black;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 0.5vw;

//     img{
//         cursor: pointer;
//     }

// `

export const Likes = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
`

export const Comments = styled.div`
    display: flex;
    
`