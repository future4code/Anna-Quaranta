import styled from "styled-components";

export const ContainerPai = styled.div`
    width: 50vw;
    background: white;
    
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 90%;
        height: 100%;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    height: auto;
    padding: 1vw;

    b{
        color: #42a5f5
    }

    p{
        margin-left: 2vw;
        word-break: break-all;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        min-height: 10vw;
        font-size: 5vw;
        padding: 2vw;
    }
`

export const CreateComment = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4vw;
    padding: 0 1vw;

    textarea{
        resize: none;
        overflow-y: hidden;
        width: 90%;
        padding: 0.2vw;
        wrap: wrap;
        border: none;
        outline: none;
    }
    
    button{
        background: none;
        border: none
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        min-height: 10vw;
        font-size: 5vw;
        padding: 2vw;
    }
`