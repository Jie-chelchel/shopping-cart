import { combineReducers } from "redux";
import shoppingReducer from "./shoppingReducer";

const reducers = combineReducers({
  shop: shoppingReducer,
});

export default reducers;
