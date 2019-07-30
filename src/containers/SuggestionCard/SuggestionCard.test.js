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