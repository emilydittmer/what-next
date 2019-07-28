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
    return(
      <h3>{this.props.name}</h3>
    )
  }
}

const mapStateToProps = state => ({
  suggestions: state.suggestions
})



export default connect (mapStateToProps)(SuggestionCard);