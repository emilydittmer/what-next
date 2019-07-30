import React from 'react';
import { shallow } from 'enzyme';
import { Search, mapDispatchToProps } from './Search';
import { setSearchShow } from "../../actions";

describe('Search', () => {
  let wrapper, props;
  let mockEvent = { 
    preventDefault: jest.fn(),
    target: {
    name: 'searchValue',
    value: 'The Office'
    }
  }

  beforeEach(() => {
    wrapper = shallow(<Search {...props} />)
  })

  it('should match the snapshot', () => {
    wrapper.setState({error: '', searchValue: ''})
    expect(wrapper).toMatchSnapshot()
  })

  it('should render an error', () => {
    wrapper.setState({error: 'Error', searchValue: ''})
    expect(wrapper).toMatchSnapshot()
  })

  it('should reset the searchValue state', () => {
    wrapper.setState({searchValue: 'The Office'})
    expect(wrapper.state('searchValue')).toEqual('The Office')
    wrapper.instance().resetInputs()
    expect(wrapper.state('searchValue')).toEqual('')
  })

  it('should have handleChange called on the search change', () => {
    wrapper.instance().handleChange = jest.fn()
    wrapper.find('.search-input').simulate('change')
    expect(wrapper.instance().handleChange).toHaveBeenCalled()
  })

  it('should set state for the searchValue', () => {
    expect(wrapper.state('searchValue')).toEqual('')
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('searchValue')).toEqual('The Office')
  })

  xit('should call setSearchShow', async () => {
    wrapper.instance().fetchWatchedShowId = jest.fn(() => 'The Office')
    wrapper.setState({searchValue: 'The Office'})
    let mockSetSearchShow = jest.fn()
    wrapper.setProps({setSearchShow: mockSetSearchShow})
    await wrapper.instance().handleSubmit(mockEvent)
    expect(mockSetSearchShow).toHaveBeenCalled()
  })

  xit('should set error state if could not fetch show', async () => {
    wrapper.instance().fetchWatchedShowId = jest.fn(() => "")
    expect(wrapper.state('error')).toEqual("")
    await wrapper.instance().handleSubmit(mockEvent)
    expect(wrapper.state('error')).toEqual("No results found. Please search again")
  })

  it('should call resetInputs', () => {
    wrapper.instance().fetchWatchedShowId = jest.fn(() => "The Office")
    wrapper.setState({searchValue: 'The Office'})
    wrapper.instance().resetInputs()
    expect(wrapper.state('searchValue')).toEqual('')
  })

})

describe("mapDispatchToProps", () => {
  it("calls dispatch with a setSearchShow action", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setSearchShow({name: 'The Office'});
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.setSearchShow({name: 'The Office'});
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});