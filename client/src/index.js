import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './reset.scss';
import Home from './pages/Home';
import Results from './pages/Results';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/results' component={Results}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
