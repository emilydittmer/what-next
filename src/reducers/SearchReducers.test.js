import { SearchReducers } from "./SearchReducers";

describe("SearchReducers", () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = SearchReducers(undefined, {})
    expect(result).toEqual(expected) 
  });

  it('should set a show to state', () => {
    const action = {
      type: 'SET_SEARCH_SHOW',
      show: { id: 1, name: 'The Office' }
    }
    const expected = { id: 1, name: 'The Office' }
    const result = SearchReducers(undefined, action);
    expect(result).toEqual(expected)
  })

})