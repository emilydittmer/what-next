import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      error: '',
      searchValue: ''
    }
  }

  handleChange= (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value })
  }

  render(){
    return(
      <form>
        <input 
          type='text'
          placeholder='TV Show Title'
          value={this.state.searchValue}
          name='searchValue'
          onChange={event => this.handleChange(event)}
        />
      </form>
    )
  }
}

export default Search;