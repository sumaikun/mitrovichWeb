/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
//import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
//import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
//import Snackbar from "components/Snackbar/Snackbar.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

//local components
import ServientregaReport from "./.components/ServientregaReport"

const styles = {
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  optionReport:{
    cursor:"pointer",
    "&:hover": {
        backgroundColor:"#ded8d8"
    }
  }
};

const useStyles = makeStyles(styles);

export default function Reports() {
  
    const classes = useStyles();

    const [ serviOpen, setServiOpen ] = React.useState(false)
 
  return (
    <React.Fragment>
        <Card>
            <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Reportes</h4>
            </CardHeader>
            <CardBody>
                <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <h5>Reportes disponibles:</h5>
                    <br />
                    <SnackbarContent  className={classes.optionReport}  onClick={ () => { setServiOpen(true) }} message={"Reporte servientrega"} />
                </GridItem>         
                </GridContainer>      
            </CardBody>
        </Card>
        <ServientregaReport open={serviOpen}  handleClose={()=>setServiOpen(false)} />
    </React.Fragment>
    
  );
}
