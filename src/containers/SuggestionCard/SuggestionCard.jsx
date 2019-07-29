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
            <h3 className="name">{name}</h3>
            <p className="average">{voteAverage}/10</p>
          </div>
          <p className="aired">First Aired: {date}</p>
          <p className="overview">{overview}</p>
        </div>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  suggestions: state.suggestions
});

export default connect(mapStateToProps)(SuggestionCard);
