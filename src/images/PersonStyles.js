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
}));
