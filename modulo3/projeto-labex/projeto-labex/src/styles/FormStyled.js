import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55vw;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        height: 91vh;
    }
`

export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 50vw;
    width: 38%;
    background-color: #0274F5;
    border-radius: 2vw;

    h2{
        margin: 1vw;
        font-size: 3vw;
        color: white;
        text-align: center;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 85%;
        height: 90%;

        h2{
            font-size: 8vw;
        }
    }
`

export const Form = styled.form`
    border: 1px solid goldenrod;
    border-radius: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 70%;
    padding: 0.5vw;

    label{
        margin: 0.2vw;
    }
    input,select{
        width: 23vw;
        height: 2.5vw;
        border: 2px dotted lightslategray;
    }

    textarea{
        width: 23vw;
        height: 6vw;
        resize: none;
        padding: 0.3vw;
    }

    legend{
        margin: 0 0 0.2vw 0;
        color: white;
        font-size: 1.2vw;
    }

    input{
        padding: 0.5vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        legend{
            font-size: 4vw;
            margin: 0.4vw;
        }

        input, select, textarea{
            width: 60vw;
            height: 7vw;
        }
      
    }
`
export const Icones = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin: 1vw;

    img{
        cursor: pointer;
        width: 3vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        img{
            width: 8vw;
        }
    }
`
