import {
    SET_ECOMMERCE_SHIPPINGS,   
} from "../constants";
import api from "middleware/api"; 


function setShippings(shippings) {
    return {
      type: SET_ECOMMERCE_SHIPPINGS,   
      shippings
    };
  }



export function getEcommerceShippings(cb=null) {
    
    
    return dispatch => {
      return api.getData("ecommerceShippings")
        .then(( response ) => {

          dispatch(setShippings(response.data ? response.data : []));
          
          if(cb) { cb(true,false) }
          
        })
        .catch(err => { console.log("Error: ", err)
          
          if(cb) { cb(false,true) }
        
      });
    }
}