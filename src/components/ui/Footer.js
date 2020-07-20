import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative'
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em'
    }
  },
  mainContainer: {
    position: 'absolute'
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  gridItem: {
    margin: '3em'
  },
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em'
    }
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em'
    }
  }
}));

const Footer = ({ selectedIndex, setSelectedIndex, value, setValue }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(0)}
                to="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                to="/services"
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                to="/customsoftware"
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                to="/mobileapps"
                className={classes.link}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(3);
                  setSelectedIndex(1);
                }}
                to="/websites"
                className={classes.link}
              >
                Websites
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to="/revolution"
                className={classes.link}
              >
                Revolution
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to="/revolution"
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to="/revolution"
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to="/revolution"
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to="/about"
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to="/about"
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to="/about"
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(4)}
                to="/contact"
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        src={footerAdornment}
        alt="mon development company"
      />

      {/* Social Media Icons */}
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={'a'}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="facebook Icon" src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
        >
          <img alt="twitter Icon" src={twitter} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="http://www.instagram.com"
          target="_blank"
        >
          <img alt="instagram Icon" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
