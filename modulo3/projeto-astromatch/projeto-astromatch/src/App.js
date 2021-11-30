import React from "react";
import styled from 'styled-components'
import Card from './components/Card/Card'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const DivPai = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(208, 208, 208);
  width: 100vw;
  height: 100vh;
`


class App extends React.Component {
  render() {
    return (
      <DivPai>
        <GlobalStyle/>
        <Card/>
      </DivPai>
    )
  }
}

export default App;