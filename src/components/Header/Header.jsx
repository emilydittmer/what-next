import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Watchlist from '../../containers/Watchlist/Watchlist'

const Header = () => {
  return (
    <header className="App-header">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <h1>What Next?</h1>
      </NavLink>
      <NavLink to="/watchlist" component={Watchlist}>
        <button>WatchList</button>
      </NavLink>
    </header>
  );
};

export default Header;
