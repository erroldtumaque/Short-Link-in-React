import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import Login from '../imports/ui/Login';
import NotFound from '../imports/ui/NotFound';

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/link" component={Link}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
</BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
