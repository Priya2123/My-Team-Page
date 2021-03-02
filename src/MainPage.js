import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./MainPageStyles.js";

const MainPage = () => {
  const classes = useStyles();
  return (
    <Grid container lg={12} md={12} style={{ marginTop: "110px" }}>
      <Grid item lg={6} md={6}>
        <Grid container lg={12} md={12} justify="center">
          <Grid item lg={12} md={12} justify="center">
            <Typography className={classes.textheading}>
              The creative crew
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={6} md={6}>
        <Grid container lg={12} md={12}>
          <Grid item lg={12} md={12}>
            <Typography className={classes.headingtwo}>WHO WE ARE</Typography>

            <Typography className={classes.headingthree}>
              We are team of creatively diverse. driven. innovative individuals
              working in various locations from the world.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainPage;
