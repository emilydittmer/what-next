import { combineReducers } from "redux";
import { SearchReducers } from './SearchReducers';
import { SuggestionsReducers } from './SuggestionsReducers';
import { WatchlistReducers } from "./WatchlistReducers";

const rootReducer = combineReducers({
  search: SearchReducers,
  suggestions: SuggestionsReducers,
  watchlist: WatchlistReducers
})

export default rootReducer;