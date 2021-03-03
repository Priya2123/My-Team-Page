import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { useStyles } from "./PersonStyles.js";

const Person = ({ name, image, designation }) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.designation}>{designation}</Typography>
      <Paper style={{ width: "210px", height: "290px" }}>
        <img
          src={image}
          style={{ width: "210px", height: "290px" }}
          alt="Person 1"
        />
      </Paper>
      <Typography className={classes.name}>{name}</Typography>
    </>
  );
};

export default Person;
