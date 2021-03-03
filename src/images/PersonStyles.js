import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({ 
    name: {
        fontFamily: "Poppins",
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '17px',
        marginTop: '0.3rem',
        width: '210px'
    },
    designation: {
        transform: 'rotate(90deg)'
    }
}))