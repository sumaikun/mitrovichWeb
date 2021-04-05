import React, { Component } from "react";

//global components
import Image from 'material-ui-image'

//local components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/Button/Button.js";

//local assets
import logo from "assets/img/mitrovich-logo.png";
import Background from "assets/img/logistic.jpg";
import "./styles.css";

//redux
import { connect } from "react-redux";
import { loginUser } from "redux/actions/auth";
import { withRouter } from 'react-router-dom';

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    };
  }

  

  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  submitLogin = () => {
    this.props.loginUser(this.state,(success)=>{
      
      if(success){
        this.props.history.push("admin")
      }
     
    })
  }

  render() {
    return (
      <div id="login-main" style={{backgroundImage: `url(${Background})`}} >
        <div id="login-container" >
        <div style={{display:"flex",justifyContent:"center"}} >
          <div id="logo-container" >
            <Image  src={logo} id="logo-container" imageStyle={{ width:"none", height:"none" }}
             aspectRatio={2} />        
          </div>
        </div>        
          <div className="App">
            <form className="form">
              <CustomInput
                labelText="Email"
                id="email"
                formControlProps={{
                  fullWidth: true
                }}
                handleChange={this.handleChange}
                type="text"
              />
              <CustomInput
                labelText="Password"
                id="password"
                formControlProps={{
                  fullWidth: true
                }}
                handleChange={this.handleChange}
                type="password"
              />
              <Button type="button" color="primary"
               onClick={this.submitLogin}
               className="form__custom-button">
                Log in
              </Button>
            </form>
          </div>
        </div>    
      </div>
       
    );
  }
}

export default connect(null, { loginUser })(withRouter(Login));