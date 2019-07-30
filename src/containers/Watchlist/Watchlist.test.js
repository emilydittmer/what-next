import React from 'react';
import Watchlist from './Watchlist';
import { shallow } from 'enzyme';

describe('Watchlist', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      watchlist: {watchlist: [{id: 1, name:'The Office'}]}
    },
    wrapper = shallow(<Watchlist {...props}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  
})