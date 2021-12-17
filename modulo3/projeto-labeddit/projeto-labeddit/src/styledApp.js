import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    button{
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
    /* width: 90vw; */
    height: 100vh;
`