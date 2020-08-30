import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from './../assets/Custom Software Icon.svg';
import mobileAppsIcon from './../assets/mobileIcon.svg';
import websitesIcon from './../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: '1em'
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em'
    }
  }
}));

const Services = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>

          <Grid item>
            <img
              alt="custom software icon"
              src={customSoftwareIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* custom software Block Content */}

      {/* IOS/Android Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined
            }}
          >
            <Typography variant="h4">IOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{matchesSM ? null : <br />}{' '}
              with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>

          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              alt="ios android phones"
              src={mobileAppsIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* IOS/Android Block */}

      {/* website Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>

          <Grid item>
            <img
              alt="website icon"
              src={websitesIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
