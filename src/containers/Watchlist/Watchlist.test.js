import React from 'react';
import {Watchlist, mapStateToProps} from './Watchlist';
import { shallow } from 'enzyme';

describe('Watchlist', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      watchlist: [{id: 1, name:'The Office'}]
    },
    wrapper = shallow(<Watchlist {...props}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe("mapStateToProps", () => {
  it("should return an object with a watchlist array", () => {
    const mockState = {
      watchlist: [{ id: 1, name:"The Office" }],
      type: "GRAB_WATCHLIST"
    };
    const expected = { watchlist: [{ id: 1, name:"The Office" }], type: "GRAB_WATCHLIST" } ;
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});