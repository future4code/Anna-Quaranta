import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40vw;
    height: 25vw;
    margin: 2vw;
    border-radius: 2vw;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 90%;
        height: 60vw;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid blue;
    border-radius: 2vw 2vw 0 0;
    padding: 0.5vw;
    height: 15%;
    font-weight: bold;
    background: #42a5f5;
    font-size: 1.5vw;

    img{
        width: 2.5vw;
        margin: 0.5vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 6vw;
        height: 20%;

        img{
            width: 6vw;
        }
    }

`

export const Body = styled.div`
    background-color: white;
    height: 70%;
    padding: 1vw;
    word-break: break-all;

    h3{
        font-size: 2.5vw;
        margin-bottom: 1vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 5vw;
        
        h3{
            font-size: 7vw;
        }
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid blue;
    border-radius: 0 0 2vw 2vw;
    padding: 0.5vw 2.5vw 0.5vw 0.5vw;
    height: 15%;
    background: #42a5f5;

    img{
        cursor: pointer;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        height: 20%;
    
    }

 `

export const Likes = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    font-size: 1.5vw;
    font-weight: bold;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 30%;
        font-size: 4vw;
     
    }
`

export const Comments = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 3vw;
    font-size: 1.5vw;
    font-weight: bold;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 15%;
        font-size: 4vw;
    }
    
`