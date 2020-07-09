import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Images
import logo from '../../assets/logo.svg';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '7em'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <img alt="mondevelopment logo" src={logo} className={classes.logo} />
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
