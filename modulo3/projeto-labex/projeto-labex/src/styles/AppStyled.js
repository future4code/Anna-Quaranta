import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif, Arial;

    h1,h2{
      font-family: 'Exo', sans-serif;
    }

    button{
      cursor: pointer;
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`

export {GlobalStyle, Container}