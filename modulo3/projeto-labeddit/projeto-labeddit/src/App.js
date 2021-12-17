import Router from "./routes/Router";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import { Container, GlobalStyle } from "./styledApp";

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Container>

  )
}

export default App;
