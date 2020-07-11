import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Images
import logo from '../../assets/logo.svg';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '7em'
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    minWidth: 10,
    marginLeft: '25px'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <img alt="mondevelopment logo" src={logo} className={classes.logo} />
          <Tabs className={classes.tabContainer}>
            <Tab className={classes.tab} label="Home" />
            <Tab className={classes.tab} label="Services" />
            <Tab className={classes.tab} label="The Revolution" />
            <Tab className={classes.tab} label="About Us" />
            <Tab className={classes.tab} label="Contact Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
