import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 100vw;
  height: 100vh;
`

export {GlobalStyle, Container}