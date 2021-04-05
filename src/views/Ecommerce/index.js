import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

//redux
import { connect } from "react-redux";
import { getEcommerceShippings } from "redux/actions/ecommerce";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
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
  }
};

const useStyles = makeStyles(styles);

function EcommerceList(props) {

  const classes = useStyles();

  React.useEffect( () => {   
    props.getEcommerceShippings()
  },[])

  return (
    <GridContainer >
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Envios ecommerce</h4>
            <p className={classes.cardCategoryWhite}>
              Aca puedes verificar los envios del ecommere
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="warning"
              tableHead={["Fecha","Tienda", "idTienda", "País", "Estado", "Ciudad", "Dirección", "Código Postal", "Nombres", "Producto", "Medidas", "Valor shipping"]}
              tableKeys={["shopDate","shop","shopID","country","state","city","address","postalCode","name","product","measures","shippingValue"]}
              tableData={props.shippings}           
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
//history.push(route)

const mapStateToProps = ( state ) => {

  const { shippings } = state.ecommerce

  const { loading } = state.app

  return {
    shippings,
    loading  
  };
};


export default connect(mapStateToProps, { getEcommerceShippings })(EcommerceList);
