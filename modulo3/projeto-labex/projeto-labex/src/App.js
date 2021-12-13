import React from 'react'
import { Router } from './route/Router';
import {GlobalStyle, Container} from './styles/AppStyled'

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Router/>
    </Container>
  )
}

export default App