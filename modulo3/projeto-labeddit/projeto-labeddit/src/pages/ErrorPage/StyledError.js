import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 89vh;

    img{
        width: 40%;
        margin: 2vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        justify-content: center;
        img{
            margin: 10vw;
            width: 70%
        }
    }
`

