import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: lightgray;
    width: 100%;
    height: auto;

    img{
        width: 60%;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        align-items: center;
        height: 95%;
        
        img{
            width: 70vw;
        }
    }
`

