import { WatchlistReducers } from './WatchlistReducers';

describe("WatchlistReducers", () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = WatchlistReducers(undefined, [])
    expect(result).toEqual(expected)
  });

  it('should set all the suggested shows to state', () => {
    const action = {
      type: 'GRAB_WATCHLIST',
      shows: [{id: 1, name: 'The Office'}, {id: 2, name: 'The Office'}]
    }
    const expected = [{id: 1, name: 'The Office'}, {id: 2, name: 'The Office'}]
    const result = WatchlistReducers(undefined, action);
    expect(result).toEqual(expected)
  });

  it('should be able to add a show to state', () => {
    const action = {
      type: 'ADD_TO_WATCHLIST',
      show: {id:1, name: 'The Office'}
    }

    const expected = [{id:1, name: 'The Office'}]
    const result = WatchlistReducers(undefined, action)
    expect(result).toEqual(expected)
  })

  it('should be able to remove a show from state', () => {
    const action = {
      type: 'DELETE_FROM_WATCHLIST',
      id: 1
    }
    const expected = [];
    const result = WatchlistReducers(undefined, action)
    expect(result).toEqual(expected)

  })
})