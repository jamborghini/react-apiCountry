import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Countries from './components/Countries';
import Nav from './components/Nav';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/countries" component={Countries} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
