import * as actions from './index';

describe('actions', () => {
  it('should have a type of SET_SEARCH_SHOW', () => {
    //setup
    const show = {show: "The Office"}
    const expectedAction = {
      type: "SET_SEARCH_SHOW",
      show: show
    };
    //exectution
    const result = actions.setSearchShow(show);
    //expectation
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of GRAB_SUGGESTED_SHOWS', () => {
    const shows = {shows: 'The Office'}
    const expectedAction = {
      type: 'GRAB_SUGGESTED_SHOWS',
      shows: shows
    }
    const result = actions.grabSuggestedShows(shows);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of ADD_TO_WATCHLIST', () => {
    const show = {show: {id: 1, name:'The Office'}}
    const expectedAction = {
      type: 'ADD_TO_WATCHLIST',
      show: show
    }
    const result = actions.addToWatchlist(show);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of DELETE_FROM_WATCHLIST', () => {
    const id = 1
    const expectedAction = {
      type: 'DELETE_FROM_WATCHLIST',
      id: id
    }
    const result = actions.deleteFromWatchlist(id);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of GRAB_WATCHLIST', () => {
    const shows = {shows: {id: 1, name:'The Office'}}
    const expectedAction = {
      type: 'GRAB_WATCHLIST',
      shows: shows
    }
    const result = actions.grabWatchlist(shows);
    expect(result).toEqual(expectedAction);
  })
})