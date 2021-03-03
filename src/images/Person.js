import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import person1 from "../assets/1.png";
import { useStyles } from "./PersonStyles.js";

const Person = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Grid container lg={12} md={12} justify="center">
        <Grid item lg={3} md={3}> */}
          <Paper style={{ width: "210px", height: "290px" }}>
            <img
              src={person1}
              style={{ width: "210px", height: "290px" }}
              alt="Person 1"
            />
            {/* <Typography className={classes.designation}>
              Product Manager
            </Typography> */}
          </Paper>

          <Typography className={classes.name}>Bill Mahoney</Typography>
        {/* </Grid>
      </Grid> */}
    </>
  );
};

export default Person;
