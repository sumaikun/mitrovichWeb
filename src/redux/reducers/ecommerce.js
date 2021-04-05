import {
    SET_ECOMMERCE_SHIPPINGS
  } from "../constants";
  
  let index

  export function ecommerce(
    state = {
      shippings:[],     
    },
    action
  ) {
    switch (action.type) {

      case SET_ECOMMERCE_SHIPPINGS:
        
        return Object.assign({}, state, {
            shippings:action.shippings,         
        });

      default:
        return state;


    }
  }