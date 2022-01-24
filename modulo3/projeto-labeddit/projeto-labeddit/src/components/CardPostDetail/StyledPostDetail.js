import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50vw;
    height: 25vw;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 90%;
        height: 50vh;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid blue;
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
        height: 25%;
        font-size: 8vw;

        img{
            width: 10vw;
        }
    }

`

export const Body = styled.div`
    background-color: white;
    min-height: 70%;
    padding: 1vw;

    h3{
        font-size: 2.5vw;
        margin-bottom: 1vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        min-height: 30vh;
        padding: 2vws;
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
    padding: 0.5vw;
    height: 15%;
    background: #42a5f5;
    padding-right: 2vw;
    

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