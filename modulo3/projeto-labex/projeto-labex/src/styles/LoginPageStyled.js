import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 91vh;
`

export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 85%;
    width: 30%;
    background-color: #0274F5;
    border-radius: 2vw;

    h2{
        font-size: 5vw;
        color: white;
    }

    input{
        width: 20vw;
        height: 3vw;
        border: 2px dotted lightslategray;
        padding: 0.5vw;
    }

    legend{
        margin-bottom: 0.5vw;
        color: white;
        font-size: 1.2vw;
    }

    button{
      width: 14vw;
      height: 2.5vw;
      background-color: rgba(0,0,255,0.8);
      border: 2px groove white;
      color: whitesmoke;
      font-size: 1.0vw;

      &:hover{
            background-color: rgba(255,255,255,0.8);
            border: 2px dotted rgba(0,0,255,0.8);
            color: rgba(0,0,255,0.8);
        }
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 85%;
        height: 75%;

        h2{
            font-size: 18vw;
        }

        button{
            width: 50%;
            height: 8vw;
            font-size: 5vw;
        }
    }
    
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60%;

`

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    label{
        margin: 1vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        height: 50vw;

        input{
            width: 70vw;
            height: 13vw;
        }

        label{
            margin: 4vw;
        }

        legend{
            font-size: 4vw;
        }
    }

`
export const Icones = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    
    img{
        cursor: pointer;
        width: 3vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        img{
            width: 10vw;
        }
    }
    

`