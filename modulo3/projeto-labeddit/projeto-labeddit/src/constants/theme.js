import { createMuiTheme } from '@material-ui/core';
import { primaryColor, secondaryColor } from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor
    },
    secondary: {
      main: secondaryColor
    }
  }
});

export default theme