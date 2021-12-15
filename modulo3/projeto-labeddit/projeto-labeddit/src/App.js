import Router from "./routes/Router";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    button{
      cursor: pointer;
    }
  }
`;
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  )
}

export default App;
