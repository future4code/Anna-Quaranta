import { TextField } from "@material-ui/core";
import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgrey;
    min-height: 89.7vh;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        min-height: 91.6vh;
     
    }
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

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 85vw;
        height: 20vw;
    }   
`

export const MyInput = styled(TextField)({
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 55,
    width: 450

});


