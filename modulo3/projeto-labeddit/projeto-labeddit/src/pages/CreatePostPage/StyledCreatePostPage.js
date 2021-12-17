import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgrey;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        height: 91.5vh;
        justify-content: center;
    }
`

export const Central = styled.div`
    border: 3px solid #42a5f5;
    width: 40%;
    height: 48vw;
    margin: 1vw;
    padding: 1vw;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 90%;
        height: 95%;
    }
`