export const SuggestionsReducers = (state=[], action) => {
  switch (action.type) {
    case 'GRAB_SUGGESTED_SHOWS':
      return action.shows
    default:
      return state;
  }
}