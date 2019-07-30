export const WatchlistReducers = (state=[], action) => {
  switch (action.type) {
    case 'GRAB_WATCHLIST':
      return action.shows
    case 'ADD_TO_WATCHLIST':
      return [...state, action.show]
    case 'DELETE_FROM_WATCHLIST':
      const watchlist = [...state]
      const index = watchlist.findIndex(show => show.id === action.id)
      watchlist.splice(watchlist[index], 1)
      return watchlist
    default:
      return state;
  }
}