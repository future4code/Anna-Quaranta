import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    background-size: cover;
    height: 100%;
    
    button{
      width: 15vw;
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
`

export const Central = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    min-height: 30vw;
    margin: 1vw;
    background-color: rgba(0,0,255,0.2);
    color: white;

    h2{
        margin: 1vw;
        font-size: 4vw;
        text-shadow: 2px 2px 3px grey;
        
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        border: 1px solid black;
        width: 90%;

        h2{
            font-size: 7vw;
        }

        button{
            width: 50%;
            height: 10vw;
            font-size: 4vw;
            margin: 2vw;
        }
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1vw;
    margin: 0.5vw;
    min-height: 8vw;
    width: 80%;
    background-color: white;
    color: black;
    box-shadow: 5px 6px 6px #888888;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        border: 1px solid black;
        width: 90%;

        p{
            margin: 0.8vw;
        }
    }

`

export const Trips = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`