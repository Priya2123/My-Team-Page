import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  textheading: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontFamily: "PT Serif",
    letterSpacing: "-0.045em",
    [theme.breakpoints.down("xs")]: {
      marginLeft:'5vw',
      marginTop: '5vw'
    },
  },
  headingtwo: {
    fontSize: "18px",
    fontWeight: "600",
    fontStyle: "normal",
    fontFamily: "Poppins",
    [theme.breakpoints.down("xs")]: {
      marginLeft:'5vw'
    },
  },
  headingthree: {
    width: "25rem",
    fontSize: "18px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "Poppins",
    [theme.breakpoints.down("xs")]: {
      marginLeft:'5vw',
      fontSize: "14px",
      width: '75vw'
    },
  },
  designation: {
    transform: 'rotate(90deg)',
    fontFamily: 'PT Serif',
    float: 'left',
    marginLeft: '-1vw',
    marginTop: '2.4vw'
}
}));
