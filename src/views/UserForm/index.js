import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Alert from "components/Alert"

//assets
import avatar from "assets/img/user-icon.png";


//redux
import { connect } from "react-redux";
import { saveUser, getUser } from "redux/actions/users";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);



function UserForm(props) {
  
  const classes = useStyles();

  const [ formData, setFormData ] = React.useState({ name:"",lastName:"",email:"",role:"" })

  const [ confirmPassword, setConfirmPassword ] = React.useState()

  const [ alertProperties, setAlertProperties ] = React.useState({ severity:"", message:"", open:false })

  const checkPassword = ( str ) => {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]:e.target.value  })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log("formData",formData)

    if(!checkPassword(confirmPassword))
    {
      return setAlertProperties({ severity:"error", message:"Las contraseña debe contener al menos 8 dígitos, mayuscula, minuscula un número y caractér especial (@#$&)", open:true })
    }

    if(formData.password != confirmPassword)
    {
      return setAlertProperties({ severity:"error", message:"Las contraseñas no coinciden", open:true })
    }

    //console.log(checkPassword(confirmPassword))

    props.saveUser({ ...formData, _id:props.selectedId },(success,error) =>{
      if(success)
      {
        setAlertProperties({ severity:"success", message:"Información guardada", open:true })
      }
      if(error)
      {
        setAlertProperties({ severity:"error", message:"Hubo un error guardando la información", open:true })
      }
    })
   
  }

  React.useEffect(()=>{
    if(props.selectedId){
      props.getUser(props.selectedId)
    }
  },[props.selectedId])

  React.useEffect(()=>{
    if( props.selectedUser && ( props.selectedUser._id == props.selectedId ) ){

      const { name, lastName, email, role } = props.selectedUser

      setFormData({
        name,lastName,email,role
      })

    }
  },[props.selectedUser])

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <form onSubmit={handleSubmit} >
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Usuario</h4>
                <p className={classes.cardCategoryWhite}>Completa el perfil de usuario</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Nombres"
                      id="nombre"
                      formControlProps={{
                        fullWidth: true
                      }}
                      handleChange={handleChange}
                      required={true}
                      name="name"
                      value={formData.name}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Apellidos"
                      id="apellido"
                      formControlProps={{
                        fullWidth: true
                      }}
                      handleChange={handleChange}
                      required={true}
                      name="lastName"
                      value={formData.lastName}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Correo Electronico"
                      id="correo-electronico"
                      formControlProps={{
                        fullWidth: true
                      }}
                      type="email"
                      handleChange={handleChange}
                      required={true}
                      name="email"
                      value={formData.email}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                        type="select"
                        labelText="Rol de usuario"
                        id="correo-electronico"
                        formControlProps={{
                          fullWidth: true
                        }}
                        options={
                          ["admin", "operator","customer"]
                        }
                        handleChange={handleChange}
                        required={true}
                        name="role"
                        value={formData.role}
                      />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Contraseña"
                      id="contraseña"
                      formControlProps={{
                        fullWidth: true
                      }}
                      type="password"
                      handleChange={handleChange}
                      required={true}
                      name="password"
                      value={formData.password}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Confirmar Contraseña"
                      id="confirmar-contraseña"
                      formControlProps={{
                        fullWidth: true
                      }}
                      type="password"
                      handleChange={(e)=>{ setConfirmPassword( e.target.value ) }}
                      required={true}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="warning" type="submit" >Guardar</Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <Button color="warning" round>
                Subir Imagen
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <Alert delay={4500}
        open={alertProperties.open}
        message={alertProperties.message}
        severity={alertProperties.severity}
        handleClose={ () => setAlertProperties({ ...alertProperties, open:false }) }
      />
    </div>
  );
}

const mapStateToProps = ( state ) => {

  const { users, selectedId, selectedUser } = state.users

  const { loading } = state.app

  return {
    users,
    selectedId,
    selectedUser,
    loading  
  };
};


export default connect(mapStateToProps, { saveUser, getUser })(UserForm);