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
        <Grid item lg={6} md={6} >
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
          style={{ marginTop: "5.5vh" }}
        >
          <Grid item lg={3} md={3} xs={6} sm={6}>
            <Grid container lg={12} md={12} justify="center">
              <Grid item lg={6} md={6} xs={5} sm={7}>
                <Person name="Bill Mahoney" image={person1} />
              </Grid>
              <Grid item lg={6} md={6} xs={7} sm={5}>
                <Typography className={classes.designation}>
                  PRODUCT OWNER
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3} md={3} xs={6} sm={6} style={{ marginTop: "8vh" }}>
            <Grid container lg={12} md={12} justify="center">
              <Grid item lg={6} md={6} xs={5} sm={7}>
                <Person name="Saba Cabrera" image={person2} />
              </Grid>
              <Grid item lg={6} md={6} xs={7} sm={5}>
                <Typography className={classes.designation}>
                  ART DIRECTOR
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3} md={3} xs={6} sm={6} className={classes.mobview}>
            <Grid container lg={12} md={12} justify="center">
              <Grid item lg={6} md={6} xs={5} sm={7}>
                <Person name="Shae Le" image={person3} />
              </Grid>
              <Grid item lg={6} md={6} xs={7} sm={5}>
                <Typography className={classes.designation}>
                  TECH LEAD
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            xs={6}
            sm={6}
            style={{ marginTop: "16vh" }}
            className={classes.mob}
          >
            <Grid container lg={12} md={12} justify="center">
              <Grid item lg={6} md={6} xs={5} sm={7}>
                <Person name="Skylah Lu" image={person4} />
              </Grid>
              <Grid item lg={6} md={6} xs={7} sm={5}>
                <Typography className={classes.designation}>
                  UX DESIGNER
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            xs={6}
            sm={6}
            style={{ marginTop: "6vh" }}
            className={classes.mob}
          >
            <Grid container lg={12} md={12} justify="center">
              <Grid item lg={6} md={6} xs={5} sm={7}>
                <Person name="Griff Richards" image={person5} />
              </Grid>
              <Grid item lg={6} md={6} xs={7} sm={5}>
                <Typography className={classes.designation}>
                  DEVELOPER
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            xs={6}
            sm={6}
            style={{ marginTop: "16vh", marginBottom: "10vh" }}
            className={classes.mob}
          >
            <Grid container lg={12} md={12} justify="center">
              <Grid item lg={6} md={6} xs={5} sm={7}>
                <Person name="Stan John" image={person6} />
              </Grid>
              <Grid item lg={6} md={6} xs={7} sm={5}>
                <Typography className={classes.designation}>
                  DEVELOPER
                </Typography>
              </Grid>
            </Grid>
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
            <Grid container lg={12} md={12} justify="center">
              <Grid item lg={6} md={6} xs={5}>
                <Person name="Skylah Lu" image={person4} />
              </Grid>
              <Grid item lg={6} md={6} xs={7}>
                <Typography className={classes.designation}>
                  UX DESIGNER
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3} md={3} xs={6} style={{ marginTop: "8vh" }}>
            <Grid container lg={12} md={12} justify="center">
              <Grid item lg={6} md={6} xs={5}>
                <Person name="Griff Richards" image={person5} />
              </Grid>
              <Grid item lg={6} md={6} xs={7}>
                <Typography className={classes.designation}>
                  DEVELOPER
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3} md={3} xs={6}>
            <Grid container lg={12} md={12} justify="center">
              <Grid item lg={6} md={6} xs={5}>
                <Person name="Stan John" image={person6} />
              </Grid>
              <Grid item lg={6} md={6} xs={7}>
                <Typography className={classes.designation}>
                  DEVELOPER
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid container lg={12} md={12} sm={12} xs={12} justify="center" className={classes.footerrow}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.footer} variant="caption">
            created by <a className={classes.link} href="https://github.com/Priya2123">Priya Aggarwal</a>{" "}
            - <a className={classes.link} href="https://devchallenges.io/">devchallenges.io</a>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default MainPage;
