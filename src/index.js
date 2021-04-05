/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import Login from "views/Login"
import Loading from "components/Loading"
import "assets/css/material-dashboard-react.css?v=1.9.0";


//redux libraries
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const middleware = [thunk];

const composedEnhancers = compose(
  applyMiddleware(...middleware)
);
  
//const store = createStoreWithMiddleware(reducers);

const store = createStore(persistedReducer, {}, composedEnhancers);

Window.Store = store;

const persistor = persistStore(store)

const hist = createBrowserHistory();

export const App = () => {

  //const [ isLoading, setLoading ] = React.useState( false )

  const [ isAuth, setAuth ] = React.useState( false )

  React.useEffect( ()=>{
    //console.log("store.getState()",store.getState())
    store.getState().app?.loading && store.dispatch({type:"SET_FETCHING",payload:false})
    //store.getState().app?.loading != isLoading &&  setLoading(store.getState().app?.loading)
    store.getState().auth?.token != isAuth && setAuth(store.getState().auth?.token)
  },[])

  store.subscribe( () => {
    console.log("store.getState()",store.getState())
    store.getState().auth?.token != isAuth && setAuth(store.getState().auth?.token)
  })

  return(
    <React.Fragment>
       { store.getState().app?.loading ? <Loading/> :
          <Router history={hist}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/admin" component={ isAuth ? Admin : Login } />
              <Redirect from="/" to="/admin/dashboard" />
            </Switch>
          </Router>
        }    
    </React.Fragment>      
  )

}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>    
  </Provider>,
   document.getElementById("root")
);


