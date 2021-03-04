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
    [theme.breakpoints.only("sm")]: {
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
    [theme.breakpoints.only("sm")]: {
      marginLeft: "5vw",
      marginTop: "6vw",
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
    [theme.breakpoints.only("sm")]: {
      marginLeft: "5vw",
      fontSize: "17px",
      width: "75vw",
      marginTop: "1.5vw",
    },
  },
  personrow: {
    marginTop: "14vh",
    marginBottom: "10vw",
    [theme.breakpoints.down("xs")]: {
      marginTop: "1vw",
      display: "none",
    },
    [theme.breakpoints.only("sm")]: {
      display: "none",
    },
  },
  mob: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "initial",
    },
    [theme.breakpoints.only("sm")]: {
      display: "initial",
    },
  },
  mobview: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "12vw",
    },
  },
  designation: {
    fontFamily: "PT Serif",
    fontSize: "12px",
    color: "#000",
    marginTop: "11.5vh",
    transform: "rotate(90deg)",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      marginTop: "6.8vh",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: '3.3rem'
    },
  },
  footerrow: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "1rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
     padding: '1rem 0',
     textAlign:'center'
    },
  },
  footer: {
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "14px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  link: {
    color: "grey",
    textDecoration: "none",
  },
}));
