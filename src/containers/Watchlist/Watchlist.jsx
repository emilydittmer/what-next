import React, { Component } from 'react';
import '../SuggestionContainer/SuggestionContainer.scss';
import { connect } from 'react-redux';
import SuggestionCard from '../SuggestionCard/SuggestionCard'

class Watchlist extends Component {
  constructor() {
    super();
  }

  showWatchlist() {
    if (this.props.watchlist.length === 0) {
      return(<h3>Please add shows to your watchlist.</h3>)
    } else {
      return this.props.watchlist.map(show => (
        <SuggestionCard {...show} key={show.id} />
      ))
    }
  }
  render() {
    return(
      <section>
        <h2>Your Watchlist</h2>
        <div className='suggestion-container'>
          {this.showWatchlist()}
        </div>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  watchlist: state.watchlist
})


export default connect(mapStateToProps)(Watchlist);