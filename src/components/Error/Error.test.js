import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error'

describe('Error', ()=> {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Error />)
    expect(wrapper).toMatchSnapshot()
  })
})