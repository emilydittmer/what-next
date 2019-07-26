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
})