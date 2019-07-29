import React from 'react';
import './App.scss';
import Search from '../../containers/Search/Search';
import { Switch, Route } from 'react-router-dom';
import SuggestionContainer from '../../containers/SuggestionContainer/SuggestionContainer';
import Error from '../Error/Error'
import Header from '../Header/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/results" component={SuggestionContainer} />
        <Route render={Error} />
      </Switch>
    </div>
  );
}

export default App;
