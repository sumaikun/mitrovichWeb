import {
    SET_USERS,
    ADD_USER,
    REMOVE_USER,
    SELECT_USER,
    SELECT_USER_ID
  } from "../constants";
  
  let index

  export function users(
    state = {
      users:[],     
      selectedUser:{} ,
      selectedId:null
    },
    action
  ) {
    switch (action.type) {

      case SET_USERS:
        
        return Object.assign({}, state, {
          users:action.users,         
        });

      case SELECT_USER:

        return Object.assign({}, state, {
          selectedUser:action.user,         
        });

      case ADD_USER:
        
        index = state.users.findIndex(  data => data.id === action.user.id  );

        index ? state.users[index] = action.user : state.users.push(action.user);
        
        return state;

      case REMOVE_USER:

        index = state.users.findIndex(  data => data.id === action.user.id  );

        state.users.splice(index,1);

        return state;

      case SELECT_USER_ID:
        console.log("selected id",action)
        return Object.assign({}, state, {
          selectedId:action.id,         
        });

      default:
        return state;


    }
  }