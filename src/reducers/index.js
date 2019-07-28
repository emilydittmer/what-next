import { combineReducers } from "redux";
import { SearchReducers } from './SearchReducers';
import { SuggestionsReducers } from './SuggestionsReducers';

const rootReducer = combineReducers({
  search: SearchReducers,
  suggestions: SuggestionsReducers
})

export default rootReducer;