import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { useStyles } from "./PersonStyles.js";

const Person = ({ name, image, designation }) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <img
          src={image}
          className={classes.paper}
          alt="Person 1"
        />
      </Paper>
      <Typography className={classes.name}>{name}</Typography>
    </>
  );
};

export default Person;
