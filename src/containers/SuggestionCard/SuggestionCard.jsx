import React, { Component } from "react";
import "./SuggestionCard.scss";
import { connect } from "react-redux";
import {
  grabWatchlist,
  deleteFromWatchlist,
  addToWatchlist
} from "../../actions";
import active from "../../images/bookmark-black-shape.svg";
import inactive from "../../images/bookmark-white.svg";
import PropTypes from "prop-types";

export class SuggestionCard extends Component {
  constructor(props) {
    super(props);
  }

  handleWatchlist = (e) => {
    e.preventDefault()
    const { id, name, backgroundImg, voteAverage, overview, date } = this.props;
    const show = { id, name, backgroundImg, voteAverage, overview, date}
    if(!this.props.watchlist.find(show => show.id === id)){
      this.props.addToWatchlist(show)
    } else {
      this.props.deleteFromWatchlist(id)
    }
  }

  render() {
    const { id, name, backgroundImg, voteAverage, overview, date } = this.props;
    return (
      <article
        className="image-container"
        style={{
          background: `url(${backgroundImg})`
        }}
      >
        <div
          className="content"
          style={{
            background: "rgba(0,0,0,.7)"
          }}
        >
          <div className="top-line">
            <div className='left-top-line'>
              <h3 className="name">{name}</h3>
              <p className="average">{voteAverage}/10</p>
            </div>
            <img
              src={this.props.watchlist.find(show => show.id === id) ? active : inactive}
              alt="inactive"
              className="inactive"
              onClick={this.handleWatchlist}
            />
          </div>
          <p className="aired">First Aired: {date}</p>
          <p className="overview">{overview}</p>
        </div>
      </article>
    );
  }
}

export const mapStateToProps = state => ({
  suggestions: state.suggestions,
  watchlist: state.watchlist
});

export const mapDispatchToProps = dispatch => ({
  grabWatchlist: watchlist => dispatch (grabWatchlist(watchlist)),
  addToWatchlist: watchlist => dispatch(addToWatchlist(watchlist)),
  deleteFromWatchlist: watchlist => dispatch(deleteFromWatchlist(watchlist))
});

SuggestionCard.propTypes = {
  id: PropTypes.number, 
  name: PropTypes.string, 
  backgroundImg: PropTypes.string,
  voteAverage: PropTypes.number,
  overview: PropTypes.string,
  date: PropTypes.string,
  suggestions: PropTypes.array,
  watchlist: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestionCard);
