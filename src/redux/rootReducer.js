import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { ProductListReducer } from "./productListReducer";
export default combineReducers({ cartData, ProductListReducer });
