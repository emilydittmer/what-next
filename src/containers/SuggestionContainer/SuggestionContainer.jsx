import React, { Component } from 'react';
import './SuggestionContainer.scss';
import { fetchSuggestedShows } from '../../utils/apiCalls'
import { connect } from 'react-redux';
import { grabSuggestedShows } from '../../actions';
import SuggestionCard from '../SuggestionCard/SuggestionCard'

class SuggestionContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: ''
    }
  }

  componentDidMount() {
    fetchSuggestedShows(this.props.search.id)
      .then(shows => this.props.grabSuggestedShows(shows))
      .catch(this.setState({ error: "Error fetching suggestions" }));
  }
  showValue() {
    if(this.props.suggestion) {
      return(<h2>{this.state.error}</h2>)
    } else {
      return this.props.suggestions.map(suggestion => (
        <SuggestionCard {...suggestion} key={suggestion.id} />
      ))
    }
  }
      
  render(){
    return(
      <section>
        <h3>Shows like {this.props.search.name}: </h3>
        {this.showValue()}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search,
  suggestions: state.suggestions
})

const mapDispatchToProps = dispatch => ({
  grabSuggestedShows: shows => dispatch(grabSuggestedShows(shows))
})

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionContainer);