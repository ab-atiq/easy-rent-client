import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./redux/userReducer";


export default configureStore({
  reducer: {
    user: userReducer
  }
});


