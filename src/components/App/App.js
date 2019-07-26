import React from 'react';
import './App.scss';
import Search from '../../containers/Search/Search'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>What Next?</h1>
      </header>
      <Search />
    </div>
  );
}

export default App;
