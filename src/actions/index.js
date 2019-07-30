export const setSearchShow = show => ({
  type: 'SET_SEARCH_SHOW',
  show
})

export const grabSuggestedShows = shows => ({
  type: 'GRAB_SUGGESTED_SHOWS',
  shows
})

export const addToWatchlist = show => ({
  type: 'ADD_TO_WATCHLIST',
  show
})

export const deleteFromWatchlist = id =>  ({
  type: 'DELETE_FROM_WATCHLIST',
  id
})

export const grabWatchlist = shows => ({
  type: 'GRAB_WATCHLIST',
  shows
})