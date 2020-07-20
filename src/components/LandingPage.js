import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';
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
  }
}));

const LandingPage = () => {
  const classes = useStyles();

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

            <Grid container>
              <Grid item>
                <Button variant="contained">Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">
                  Learn More
                  <ButtonArrow height={15} width={15} fill="red" />
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
