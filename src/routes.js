import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, SavedGems } from './components';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/saved" component={SavedGems} />
        <Route component={Main} />
      </Switch>
    );
  }
}
