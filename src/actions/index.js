export const setSearchShow = show => ({
  type: 'SET_SEARCH_SHOW',
  show
})

export const grabSuggestedShows = shows => ({
  type: 'GRAB_SUGGESTED_SHOWS',
  shows
})

export const setErrorMessage = error => ({
  type: "SET_ERROR_MESSAGE",
  error
})