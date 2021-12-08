import styled from "styled-components";

export const DivPai = styled.div`
    background-color: whitesmoke;
    width: 29%;
    height: 97%;
    border: 1px solid black;
    border-radius: 0.5vw;
    
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #bc8f8f;
    border-bottom: 1px solid black;
    height: 9%;
    padding: 0.5vw;
    font-size: 1.2vw;
    font-weight: bold;

    h1{
        &:hover{
            color: #3a3030;
        }
    }

    img{
        width: 2.5vw;
        cursor: pointer;
        filter: url();
    }
`
