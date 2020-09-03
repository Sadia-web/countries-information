import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetail from './components/CountryDetail/CountryDetail';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  
  return (
    <div className="main">
      <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:countryName">
            <CountryDetail></CountryDetail>
          </Route>
          <Route path="/*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
