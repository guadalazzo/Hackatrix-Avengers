import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './reset.scss';
import Home from './pages/Home';
import Results from './pages/Results';
import Result from './pages/Result';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />>
      <Route exact path='/results' component={Results} />
      <Route exact path='/result/:id' component={Result} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
