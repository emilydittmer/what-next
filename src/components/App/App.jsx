import React from 'react';
import './App.scss';
import Search from '../../containers/Search/Search'
import { Route } from 'react-router-dom'
import SuggestionContainer from '../../containers/SuggestionContainer/SuggestionContainer'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>What Next?</h1>
      </header>
      <Search />
      <Route exact path="/results" component={SuggestionContainer} />
    </div>
  );
}

export default App;
