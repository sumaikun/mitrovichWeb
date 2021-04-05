import React from "react";
//alerts
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



export default function Alert(props) {
    
    const [open, setOpen] = React.useState(false);

    React.useEffect( ()=> {
        setOpen(props.open)
    },[props.open])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        props.handleClose()
    };

    return(
    <Snackbar open={open} autoHideDuration={props.delay || 6000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" {...props}  onClose={handleClose} severity={`${props.severity || "success"}`}>
          { props.message || "alert" }
        </MuiAlert>
    </Snackbar>
    )
}

