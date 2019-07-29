import React from 'react';
import { shallow } from 'enzyme';
import { setSearchShow, grabSuggestedShows } from '../../actions'
import { SuggestionContainer, mapStateToProps, mapDispatchToProps } from './SuggestionContainer';

describe('SuggestionContainer', ()=> {
  let wrapper, props;

  beforeEach(() => {
    props = {
      search: {search: {id: 1, name:'The Office'}},
      suggestions: [{id: 1, name:'The Office'}, {id: 1, name:'The Office'}]
    },
    wrapper = shallow(<SuggestionContainer {...props}/>)
  })

  it('should match the snapshot', () => {
    wrapper.setState({error: ''})
    expect(wrapper).toMatchSnapshot()
  })

  it('should render an error', () => {
    wrapper.setState({error: 'Error'})
    expect(wrapper).toMatchSnapshot()
  })

  // describe("mapStateToProps", () => {
  //   it("should return an object with the searched show", () => {

  //   });
  // });

  describe("mapDispatchToProps", () => {
    it("calls dispatch with a grabSuggestedShows action", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = grabSuggestedShows("The Office");
      const mappedDispatch = mapDispatchToProps(mockDispatch);
      mappedDispatch.grabSuggestedShows("The Office");
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
}) 