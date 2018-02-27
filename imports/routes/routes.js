import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Switch, Route, withRouter } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import Signup from '../ui/Signup';
import Links from '../ui/Links';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const history = createHistory();
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
let isUnauthenticatedPage = true;
let isAuthenticatedPage = false;

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    history.push('/links');
  }
}

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    history.push('/');
  }
}

export const onAuthChange = (isAuthenticated) => {
  const pathname = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  console.log('pathname: ', history.location.pathname);
  if (isUnauthenticatedPage && isAuthenticated) {
    history.push('/links');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.push('/');
  }
};

export const routes = (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Login} exact={true} onEnter={onEnterPublicPage}/>
      <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
      <Route path="/links" component={Links} onEnter={onEnterPrivatePage}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);
