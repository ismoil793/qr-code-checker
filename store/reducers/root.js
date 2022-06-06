import { combineReducers } from "redux";
import category from "./category";
import subCategory from "./subCategory";
import product from "./product";

const rootReducer = combineReducers({
  category,
  subCategory,
  product,
});

export default rootReducer;
