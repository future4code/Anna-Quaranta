import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 75%;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        height: 50%;
        width: 80%;
    }
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 10vw;
    margin-bottom: 1vw;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        height: 50%;
    }

`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 6vw;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        height: 30vw;
    }
`
