import React from 'react';

// MUI Stuff
import { ThemeProvider } from '@material-ui/styles';

// Custom Styles
import theme from './ui/Theme';

// Components
import Header from '../components/ui/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <h3>hello</h3>
    </ThemeProvider>
  );
};

export default App;
