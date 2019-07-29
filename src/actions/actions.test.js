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
})