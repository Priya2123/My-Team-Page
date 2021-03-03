import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  firstrow: {
    marginTop: "110px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "15vw",
    },
  },
  textheading: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontFamily: "PT Serif",
    letterSpacing: "-0.045em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5vw",
      fontStyle: "bold",
    },
  },
  headingtwo: {
    fontSize: "18px",
    fontWeight: "600",
    fontStyle: "normal",
    fontFamily: "Poppins",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5vw",
      marginTop: "8vw",
    },
  },
  headingthree: {
    width: "25rem",
    fontSize: "18px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "Poppins",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5vw",
      fontSize: "13px",
      width: "76vw",
      marginTop: "1.5vw",
    },
  },
  personrow: {
    marginTop: "28vh",
    marginBottom: "10vw",
    [theme.breakpoints.down("xs")]: {
      marginTop: "1vw",
      display: "none",
    },
  },
  mob: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "initial",
    },
  },
  mobview: {
    [theme.breakpoints.down("xs")]: {
      marginTop:'12vw'
    },
  }
}));
