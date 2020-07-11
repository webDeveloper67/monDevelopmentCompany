import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

// Images
import logo from '../../assets/logo.svg';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '8em'
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px'
  }
}));

const Header = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(
    () => {
      if (window.location.pathname === '/' && value !== 0) {
        setValue(0);
      } else if (window.location.pathname === '/services' && value !== 1) {
        setValue(1);
      } else if (window.location.pathname === '/revolution' && value !== 2) {
        setValue(2);
      } else if (window.location.pathname === '/about' && value !== 3) {
        setValue(3);
      } else if (window.location.pathname === '/contact' && value !== 4) {
        setValue(4);
      } else if (window.location.pathname === '/estimate' && value !== 5) {
        setValue(5);
      }
    },
    [value]
  );

  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Button
            component={Link}
            to="/"
            className={classes.logoContainer}
            onClick={() => setValue(0)}
            disableRipple
          >
            <img
              alt="mondevelopment logo"
              src={logo}
              className={classes.logo}
            />
          </Button>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabContainer}
            indicatorColor="primary"
          >
            <Tab className={classes.tab} component={Link} to="/" label="Home" />
            <Tab
              className={classes.tab}
              component={Link}
              to="/services"
              label="Services"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/revolution"
              label="The Revolution"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/about"
              label="About Us"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/contact"
              label="Contact Us"
            />
          </Tabs>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Free Estimate
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
