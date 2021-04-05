import { combineReducers } from "redux";
import { auth } from "./auth";
import { app } from "./app";
import { users } from "./users";
import { ecommerce } from "./ecommerce";

const reducers = combineReducers({
  auth,
  app,
  users,
  ecommerce
});

export default reducers;