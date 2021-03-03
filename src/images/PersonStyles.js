import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    width: "210px",
    height: "290px",
    [theme.breakpoints.down("xs")]: {
      width: "104px",
      height: "175px",
    },
  },
  name: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "17px",
    marginTop: "0.3rem",
    width: "210px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
  designation: {
    transform: "rotate(90deg)",
    fontFamily: "PT Serif",
    marginLeft: "13vw",
    fontSize: "12px",
    marginBottom: "-6.2vw",
    [theme.breakpoints.down("xs")]: {
        fontSize: "10px",
        marginLeft: '16.8vw',
        marginBottom: "-17vw",
      },
  },
}));
