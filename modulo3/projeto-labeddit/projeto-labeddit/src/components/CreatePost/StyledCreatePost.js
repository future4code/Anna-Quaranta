import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 2vw;
    width: 100%;
    height: 100%;

    img{
        width: 20vw;
        
    }

    input{
        width: 100%;
        height: 8%;
        padding: 1vw;
        font-size: 1.5vw;

        &:focus{
            outline: none;
            border: 2px solid #42a5f5;
        }
    }

    textarea{
        resize: none;
        width: 100%;
        height: 30%;
        padding: 1vw;
        font-size: 1.2vw;

        &:focus{
            outline: none;
            border: 2px solid #42a5f5;
        }
    }

    button{
        width: 100%;
        height: 10%;
        border:none;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        padding: 1vw;

       img{
           width: 70%;
       }

       input,textarea{
           font-size: 5vw;
       }

       font-size: 8vw;
     
    }

`