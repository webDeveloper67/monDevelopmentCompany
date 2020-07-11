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
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem'
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white'
    }
  }
});
