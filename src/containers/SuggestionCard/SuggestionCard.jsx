import React, { Component } from 'react';
import './SuggestionCard.scss';
import { connect } from 'react-redux';

class SuggestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const { id, name, backgroundImg, voteAverage, overview, date } = this.props;
    return(
      <h3>{name}</h3>
    )
  }
}

const mapStateToProps = state => ({
  suggestions: state.suggestions
})



export default connect (mapStateToProps)(SuggestionCard);