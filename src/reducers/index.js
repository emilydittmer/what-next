import { combineReducers } from "redux";
import { SearchReducers } from './SearchReducers';

const rootReducer = combineReducers({
  search: SearchReducers
})

export default rootReducer;