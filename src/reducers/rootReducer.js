import { combineReducers } from "redux";
import fetchProductsReducer from "./fetchProductsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  fetchProductsReducer,
  userReducer
});

export default rootReducer;
