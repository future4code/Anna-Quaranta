import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    background-color: lightgray;

    img{
        width: 80%;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        height: 95%;
        align-items: center;

        img{
            width: 70vw;
        }
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

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        justify-content: space-between;
        width: 80%;
        height: 90%;

        h2{
            font-size: 10vw;
            margin: 0;
        }
    }
`


