import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Error = () => {
  return (
    <header className="App-header">
      <NavLink to="/" style={{ textDecoration: 'none' }}><h1>What Next?</h1></NavLink>
    </header>
  )
}

export default Error;