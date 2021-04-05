import {
    SET_USERS,
    REMOVE_USER,
    SELECT_USER,
    SELECT_USER_ID
  } from "../constants";
  import api from "middleware/api";  
  
  function setUsers(users) {
    return {
      type: SET_USERS,   
      users
    };
  }

  function removeUser(user) {
    return {
      type: REMOVE_USER,   
      user
    };
  }

  function selectUser(user){
    return{
      type: SELECT_USER,   
      user
    }
  }

  export function selectUserId( id ){
    return{
      type: SELECT_USER_ID,
      id
    }
  }
  
  
  export function getUsers(cb=null) {
    
    
    return dispatch => {
      return api.getData("users")
        .then(( response ) => {

          dispatch(setUsers(response.data ? response.data : []));
          
          if(cb) { cb(true,false) }
          
        })
        .catch(err => { console.log("Error: ", err)
          
          if(cb) { cb(false,true) }
        
      });
    }
  }


  export function saveUser(user,cb = null) {
  
    return dispatch => {
      
      const id = user._id

      if(id){
        
        delete user._id
        
        return api.putData("users/"+id,user)
        .then(( response ) => {
          
          if(cb) { cb(response,false) }
        
        })
        .catch(err => { console.log("Error: ", err)
          if(cb) { cb(false,err) }
        });
      }else{
        return api.postData("users",user)
        .then(( response ) => {

          //dispatch(selectUser(response.data));
          
          if(cb) { cb(response,false) }
        
        })
        .catch(err => { console.log("Error: ", err)
          if(cb) { cb(false,err) }
        });
      }      
      
    }
  }
  

  export function deleteUser(user) {
  
    return dispatch => {
      return api.deleteData("users/"+user.id)
        .then(( response ) => {

          dispatch(removeUser(user));          
        
        })
        .catch(err => { console.log("Error: ", err)
           
        });
    }
  }

  export function getUser(id,cb = null) {
  
    return dispatch => {

      if(id)
      {
        return api.getData("users/"+id)
        .then(( response ) => {

          dispatch(selectUser(response.data));
          
          if(cb) { cb(true,false) }
        
        })
        .catch(err => { 
          console.log("Error: ", err) 

          if(cb) { cb(false,true) }          
        
        });
      }
    }
  }
  
  
  