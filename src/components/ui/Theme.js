import { createMuiTheme } from '@material-ui/core/styles';

const monBlue = '#0B72B9';
const monOrange = '#FFBA60';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${monBlue}`,
      orange: `${monOrange}`
    },
    primary: {
      main: `${monBlue}`
    },
    secondary: {
      main: `${monOrange}`
    }
  },
  typography: {
    h3: {
      fontWeight: 200
    }
  }
});
