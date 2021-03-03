import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { useStyles } from "./MainPageStyles.js";
import Person from "./images/Person";
import person1 from "./assets/1.png";
import person2 from "./assets/2.png";
import person3 from "./assets/3.png";
import person4 from "./assets/4.png";
import person5 from "./assets/5.png";
import person6 from "./assets/6.png";

const MainPage = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container lg={12} md={12} className={classes.firstrow}>
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
                We are team of creatively diverse. driven. innovative
                individuals working in various locations from the world.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container fixed>
        <Grid
          container
          lg={12}
          md={12}
          justify="center"
          style={{ marginTop: "15vh" }}
        >
          <Grid item lg={3} md={3} xs={6}>
            <Person
              name="Bill Mahoney"
              image={person1}
              designation="PRPDUCT OWNER"
            />
          </Grid>
          <Grid item lg={3} md={3} style={{ marginTop: "8vh" }} xs={6}>
            <Person
              name="Saba Cabrera"
              image={person2}
              designation="ART DIRECTOR"
            />
          </Grid>
          <Grid item lg={3} md={3} xs={6} className={classes.mobview}>
            <Person name="Shae Le" image={person3} designation="TECH LEAD" />
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            xs={6}
            style={{ marginTop: "16vh" }}
            className={classes.mob}
          >
            <Person
              name="Skylah Lu"
              image={person4}
              designation="UX DESIGNER"
            />
          </Grid>
          <Grid item lg={3} md={3} xs={6} className={classes.mob} style={{ marginTop: "6vh" }} >
            <Person
              name="Griff Richards"
              image={person5}
              designation="DEVELOPER"
            />
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            xs={6}
            style={{ marginTop: "16vh", marginBottom: '10vh' }}
            className={classes.mob}
          >
            <Person name="Stan John" image={person6} designation="DEVELOPER" />
          </Grid>
        </Grid>
        <Grid
          container
          lg={12}
          md={12}
          justify="center"
          className={classes.personrow}
        >
          <Grid item lg={3} md={3} xs={6}>
            <Person
              name="Skylah Lu"
              image={person4}
              designation="UX DESIGNER"
            />
          </Grid>
          <Grid item lg={3} md={3} xs={6} style={{ marginTop: "8vh" }}>
            <Person
              name="Griff Richards"
              image={person5}
              designation="DEVELOPER"
            />
          </Grid>
          <Grid item lg={3} md={3} xs={6}>
            <Person name="Stan John" image={person6} designation="DEVELOPER" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MainPage;
