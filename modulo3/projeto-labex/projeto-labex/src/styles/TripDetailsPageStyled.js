import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    
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

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        height: 91vh;

        button{
            width: 40%;
            height: 5%;
            font-size: 4vw;
        }
    }
`

export const Central = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    min-height: 10vw;
    margin: 1vw;
    padding-bottom: 1vw;
    background-color: rgba(0,0,255,0.2);
    color: white;

    h2,h3{
        margin: 1vw;
        font-size: 4vw;
        text-shadow: 2px 2px 3px grey;
        text-align: center;   
    }

    h3{
        font-size: 3vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 90%;
        height: 95%;

        h2{
            font-size: 11vw;
        }

        h3{
            font-size: 6vw;
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
    font-size: 1.5vw;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 90%;
        font-size: 3.2vw;

        p{
            margin: 1vw;
        }
    }

`

export const Card2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw;
    margin: 0.5vw;
    min-height: 8vw;
    width: 80%;
    background-color: white;
    color: black;
    box-shadow: 5px 6px 6px #888888;
    font-size: 1.2vw;

    img{
        margin: 0.5vw;
        width: 2.1vw;
        cursor: pointer;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 85%;
        height: auto;
        font-size: 3vw;

        img{
            width: 5vw;
        }

        p{
            margin: 1vw 0 1vw 0.5vw;
        }
    }
`

export const Info = styled.div`
    width: 83%;

`
export const Card3 = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    padding: 1vw;
    min-height: 8vw;
    width: 80%;
    background-color: white;
    color: black;
    box-shadow: 5px 6px 6px #888888;
    font-size: 1.2vw;

    li{
        margin: 0.2vw;
        list-style: none;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 85%;
        height: 20%;
        gap: 2vw;
        padding: 2vw;
        margin-bottom: 2vw;
        font-size: 3.5vw;
  
    }
`