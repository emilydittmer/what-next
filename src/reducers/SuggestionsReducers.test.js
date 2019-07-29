import { SuggestionsReducers } from './SuggestionsReducers';

describe("SuggestionsReducers", () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = SuggestionsReducers(undefined, [])
    expect(result).toEqual(expected)
  });

  it('should set all the suggested shows to state', () => {
    const action = {
      type: 'GRAB_SUGGESTED_SHOWS',
      shows: [{id: 1, name: 'The Office'}, {id: 2, name: 'The Office'}]
    }
    const expected = [{id: 1, name: 'The Office'}, {id: 2, name: 'The Office'}]
    const result = SuggestionsReducers(undefined, action);
    expect(result).toEqual(expected)
  })
})