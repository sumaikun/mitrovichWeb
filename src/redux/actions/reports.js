import {
    EXECUTE_SERVIENTREGA_AUTOMATION
  } from "../constants";
  import api from "middleware/api";  



 export function executeServientregaAutomation() {
  
    return dispatch => {
      return api.postData("servientregaReport")
        .then(( response ) => {

            
        
        })
        .catch(err => { console.log("Error: ", err)
           
        });
    }
  }