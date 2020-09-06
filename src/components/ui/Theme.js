import { createMuiTheme } from '@material-ui/core/styles';

const monBlue = '#0B72B9';
const monOrange = '#FFBA60';
const monGrey = '#868686';

export default createMuiTheme({
  palette: {
    common: {
      blue: monBlue,
      orange: monOrange
    },
    primary: {
      main: monBlue
    },
    secondary: {
      main: monOrange
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
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: monBlue,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: monBlue
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: monBlue,
      fontWeight: 700
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: monGrey
    },
    subtitle2: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 300
    },
    learnButton: {
      borderColor: monBlue,
      color: monBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold'
    },
    body1: {
      fontSize: '1.25rem',
      color: monGrey,
      fontWeight: 300
    }
  }
});
