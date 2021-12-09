import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    button{
      cursor: pointer;
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  width: 100%;
  height: auto;
`

export {GlobalStyle, Container}