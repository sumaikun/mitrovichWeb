import { combineReducers } from "redux";
import { auth } from "./auth";
import { app } from "./app";
import { users } from "./users";

const reducers = combineReducers({
  auth,
  app,
  users,
});

export default reducers;