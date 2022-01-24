import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgrey;
    min-height: 100%;
    padding: 2vw 0;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        min-height: 91.6vh;
    }
`
