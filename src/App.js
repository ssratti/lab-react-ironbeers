import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home'
import { Route, Switch, Link } from 'react-router-dom'
import AllBeers from './AllBeers'
import NavBar from './NavBar'
import NewBeer from './NewBeer'
import RandomBeers from './RandomBeers';
import BeerDetails from './BeerDetails';
import axios from 'axios';




function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route exact path="/allbeers" component={AllBeers} />
        <Route exact path="/randombeers" component={RandomBeers} />
        <Route exact path="/newbeer" component={NewBeer} />
        <Route exact path="/beer/:beerId" component={BeerDetails} />
      </Switch>
    </div>
  );
}

export default App;
