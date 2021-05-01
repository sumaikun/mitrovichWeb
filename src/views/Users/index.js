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
import { getUsers,selectUserId } from "redux/actions/users";

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

function TableList(props) {

  const classes = useStyles();

  React.useEffect( () => {
   
    props.getUsers()
    props.selectUserId(null)
    
  },[])

  return (
    <GridContainer >
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Usuarios del sistema</h4>
            <p className={classes.cardCategoryWhite}>
              Aca puedes verificar, editar o ver usuarios
            </p>
          </CardHeader>
          <CardBody>
            <Table
              crud={true}
              tableHeaderColor="warning"
              tableHead={["Nombre", "Apellido", "Correo", "Rol", "Tienda"]}
              tableKeys={["name","lastName","email","role","shopUrl"]}
              tableData={props.users}
              handleEdit={(value)=>{
                props.selectUserId(value["_id"])
                props.history.push("user")
              }}
              handleDelete={(value)=>{
                console.log("delete",value)
              }}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
//history.push(route)

const mapStateToProps = ( state ) => {

  const { users } = state.users

  const { loading } = state.app

  return {
    users,
    loading  
  };
};


export default connect(mapStateToProps, { getUsers, selectUserId })(TableList);
