import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
    products: productReducer,
    auth: authReducer
});