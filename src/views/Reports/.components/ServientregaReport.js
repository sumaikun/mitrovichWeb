import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField } from "@material-ui/core";

import Alert from "components/Alert"

import moment from 'moment'

//redux
import { connect } from "react-redux";
import { executeServientregaAutomation } from "redux/actions/reports";

const styles = {
    inputContainer: {
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around"
    }
}

const useStyles = makeStyles(styles);

function ServientregaReport(props) {

    const classes = useStyles();
    
    const { open, handleClose } = props

    const [ formData, setFormData ] = React.useState({})

    const [ alertProperties, setAlertProperties ] = React.useState({ severity:"", message:"", open:false })

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Reporte servientrega</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Consulta y Cruza información del reporte entre servientrega y siscore
                    </DialogContentText>

                    <div className={classes.inputContainer} >

                        <TextField
                            id="date"
                            label="Fecha inicial"
                            type="date"                       
                            InputLabelProps={{
                            shrink: true,
                            }}
                            name="initial_date"
                            onChange={ (e) => setFormData({ ...formData, [e.target.name]:e.target.value }) }
                        />

                        <TextField
                            id="date"
                            label="Fecha Final"
                            type="date"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            name="final_date"
                            onChange={ (e) => setFormData({ ...formData, [e.target.name]:e.target.value }) }
                        />

                    </div>
                
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{
                        console.log("formData",formData,moment(formData.initial_date).isBefore(formData.final_date))
                        
                        if( !formData.initial_date || !formData.final_date ){
                            return setAlertProperties({ severity:"warning",
                             message:"Debe completar todos los cambios para continuar",
                            open:true })
                        }
                        
                        if(!moment(formData.initial_date).isBefore(formData.final_date)){
                            return setAlertProperties({ severity:"warning",
                             message:"La fecha inicial no puede ser menor a la final",
                            open:true })
                        }

                        setAlertProperties({ severity:"info",
                             message:"vamos a generar el reporte",
                            open:true })

                        props.executeServientregaAutomation()
                            
                        handleClose()
                    }} color="primary">
                        Generar
                    </Button>
                </DialogActions>
            </Dialog>
            <Alert delay={4500}
                open={alertProperties.open}
                message={alertProperties.message}
                severity={alertProperties.severity}
                handleClose={ () => setAlertProperties({ ...alertProperties, open:false }) }
            />
        </React.Fragment>
       
    )
}

const mapStateToProps = ( state ) => {

    const { loading } = state.app
  
    return {     
      loading  
    };
  };
  


export default connect(mapStateToProps, { executeServientregaAutomation })(ServientregaReport);