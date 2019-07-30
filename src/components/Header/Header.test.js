import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Header />)
    instance = wrapper.instance()
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
