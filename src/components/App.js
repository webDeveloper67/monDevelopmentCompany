import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// MUI Stuff
import { ThemeProvider } from '@material-ui/styles';

// Custom Styles
import theme from './ui/Theme';

// Components
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import LandingPage from '../components/LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          value={value}
          setValue={setValue}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              <LandingPage
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />}
          />
          <Route
            exact
            path="/services"
            render={props =>
              <Services
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />}
          />
          <Route
            exact
            path="/customsoftware"
            render={props =>
              <CustomSoftware
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>mobileapps</div>}
          />
          <Route exact path="/websites" component={() => <div>websites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>revolution</div>}
          />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer setSelectedIndex={setSelectedIndex} setValue={setValue} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
