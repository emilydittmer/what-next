import React, { Component } from "react";
import "./Search.scss";
import { fetchWatchedShowId } from "../../utils/apiCalls";
import { setSearchShow } from "../../actions";
import { connect } from "react-redux";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      searchValue: ""
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ searchValue: event.target.value, error: '' });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { searchValue } = this.state;
    let searchedShow = await fetchWatchedShowId(searchValue);
    console.log(searchedShow);

    if (!searchedShow.error) {
      console.log(searchedShow);
      this.props.setSearchShow(searchedShow);
      this.props.history.push("/results");
    } else {
      console.log(searchedShow);
      this.setState({ error: "No results found. Please search again" });
    }
    this.resetInputs();
  };

  resetInputs = () => {
    this.setState({ searchValue: "" });
  };

  render() {
    return (
      <form className="search-field">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="TV Show Title"
            value={this.state.searchValue}
            name="searchValue"
            onChange={event => this.handleChange(event)}
          />
          <input
            className="submit-btn"
            type="submit"
            value="Submit"
            onClick={event => this.handleSubmit(event)}
          />
        </div>
        {this.state.error === "" ? <p /> : <p>{this.state.error}</p>}
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  setSearchShow: show => dispatch(setSearchShow(show))
});

export default connect(
  null,
  mapDispatchToProps
)(Search);
