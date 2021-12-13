import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const Central = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    margin: 1vw;
    min-height: 30vw;
    background-color: rgba(0,0,255,0.2);
    color: white;

    h2{
        margin: 1vw;
        font-size: 4vw;
        text-shadow: 2px 2px 3px grey;
        text-align: center;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 90%;

        h2{
            font-size: 10vw;
        }
    }
`

export const Button = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;

    button{
      width: 30%;
      height: 2.5vw;
      background-color: rgba(0,0,255,0.8);
      border: 2px groove white;
      color: whitesmoke;
      margin: 1vw 0;
      font-size: 1.5vw;

      &:hover{
            background-color: rgba(255,255,255,0.8);
            border: 2px dotted rgba(0,0,255,0.8);
            color: rgba(0,0,255,0.8);
        }
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 90%;
        margin: 1vw;

        button{
            height: 13vw;
            width: 40vw;
            font-size: 4vw;
            margin: 1.5vw;
        }
    }

`

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1vw;
    margin: 0.5vw 0 1.5vw 0;
    min-height: 8vw;
    width: 85%;
    background-color: white;
    color: black;
    box-shadow: 5px 6px 6px #888888;
    img{
        margin-left: 1vw;
        width: 2.5vw;
        cursor: pointer;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 95%;
        font-size: 4vw;

        img{
            width: 8vw;
        }
    }

`

export const Info = styled.div`
    width: 90%;
`