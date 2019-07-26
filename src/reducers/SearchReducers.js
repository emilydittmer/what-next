export const SearchReducers = (state={}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_SHOW':
      return action.show
    default:
      return state;
  }
}