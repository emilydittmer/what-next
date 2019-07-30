import React from 'react';
import { shallow } from 'enzyme';
import {
  grabWatchlist,
  deleteFromWatchlist,
  addToWatchlist
} from "../../actions";
import { SuggestionCard, mapStateToProps, mapDispatchToProps } from './SuggestionCard';

describe('SuggestionCard', () => {
  let wrapper, instance, mockFunction;
  let props = {
    suggestions: [{
      id: 1,
      name: 'The Office'
    }],
    watchlist: []
  }
  let mockEvent = {
    preventDefault: jest.fn()
  }
  let mockHandleWatchList = jest.fn()
  beforeEach(() => {
    mockFunction = jest.fn()
    wrapper = shallow(<SuggestionCard {...props.suggestions} {...props.watchlist} />);
    instance = wrapper.instance()
  })

  it('should match the snapshot', () => {
    mockHandleWatchList(mockEvent)
    expect(wrapper).toMatchSnapshot()
  })
})

describe("mapStateToProps", () => {
  it("should return an object with a suggestions array", () => {
    const mockState = {
      suggestions: [{id: 1, name: 'The Office'}],
      type: "GRAB_SUGGESTED_SHOWS"
    };
    const expected = { suggestions: [{id: 1, name: 'The Office'}], type: "GRAB_SUGGESTED_SHOWS" };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
  it('should return an object with a watchlist array', () => {
    const mockState = {
      watchlist: [{id: 1, name: 'The Office'}],
      type: "GRAB_WATCHLIST"
    };
    const expected = { watchlist: [{id: 1, name: 'The Office'}], type: "GRAB_WATCHLIST" };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })
});

describe("mapDispatchToProps", () => {
  it("calls dispatch with a grabWatchlist action", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = grabWatchlist([{id: 1, name: 'The Office'}]);
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.grabWatchlist([{id: 1, name: 'The Office'}]);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  it("calls dispatch with an addToWatchList action", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addToWatchlist({id: 1, name: 'The Office'});
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.addToWatchlist({id: 1, name: 'The Office'});
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  it("calls dispatch with a deleteFromWatchList action", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = deleteFromWatchlist({id: 1, name: 'The Office'});
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.deleteFromWatchlist({id: 1, name: 'The Office'});
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});