import { combineReducers } from "redux";

import ListReducer from "./ListRedux";

const rootReducer = combineReducers({
  restaurantList: ListReducer
});
export default rootReducer;
