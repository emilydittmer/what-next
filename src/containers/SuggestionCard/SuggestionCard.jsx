import React, { Component } from "react";
import "./SuggestionCard.scss";
import { connect } from "react-redux";

class SuggestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, name, backgroundImg, voteAverage, overview, date } = this.props;
    return (
      <article className="suggestion-card">
        <div className="image--container">
          <img src={backgroundImg} alt="{name} poster" />
        </div>
        <div className="content">
          <h3>{name}</h3>
          <p>{voteAverage}/10</p>
          <p>First Aired: {date}</p>
          <span className="sub-content">
            <div className="sub-border" />
            <p>{overview}</p>
          </span>
        </div>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  suggestions: state.suggestions
});

export default connect(mapStateToProps)(SuggestionCard);
