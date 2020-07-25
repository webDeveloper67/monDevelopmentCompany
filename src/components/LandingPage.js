import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import animationData from '../animations/landinganimation/data';
import ButtonArrow from '../components/ui/ButtonArrow';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: '50em',
    minHeight: '21em',
    marginTop: '2em',
    marginLeft: '10%'
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: '45px',
    width: '145px',
    marginRight: '40px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer: {
    marginTop: '1em'
  },
  learnButtonHero: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    height: 45,
    width: 145
  }
}));

const LandingPage = () => {
  const classes = useStyles();

  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Grid container direction="column">
      {/* HERO block Content */}
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid item sm>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology to the Midwest
            </Typography>

            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  Learn More
                  <ButtonArrow
                    height={15}
                    width={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
