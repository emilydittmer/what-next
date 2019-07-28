import { combineReducers } from "redux";
import { SearchReducers } from './SearchReducers';
import { SuggestionsReducers } from './SuggestionsReducers';
import { ErrorReducers } from './ErrorReducers';

const rootReducer = combineReducers({
  search: SearchReducers,
  suggestions: SuggestionsReducers,
  error: ErrorReducers
})

export default rootReducer;