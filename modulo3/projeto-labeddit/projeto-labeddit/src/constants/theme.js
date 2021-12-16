import { createMuiTheme } from '@material-ui/core';
import { primaryColor } from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor
    }
  }
});

export default theme