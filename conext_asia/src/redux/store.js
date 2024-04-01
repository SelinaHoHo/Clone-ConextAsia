import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";


const reducer = combineReducers({
    auth: authSlice
})
const store = configureStore({
  reducer,
});

export default store;