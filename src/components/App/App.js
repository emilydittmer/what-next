import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    fetch ('https://api.themoviedb.org/3/search/tv?api_key=736dcf01b7d9f4b284b47ebd12706a39&language=en-US&query=Veronica Mars&page=1')
    .then(res => res.json())
    .then(data => console.log(data.results.id))
    .catch(error => console.log(error))
    fetch('https://api.themoviedb.org/3/tv/1432/similar?api_key=736dcf01b7d9f4b284b47ebd12706a39&language=en-US&page=1')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
