import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Switch, Route, withRouter } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import Signup from '../ui/Signup';
<<<<<<< HEAD
import Dashboard from '../ui/Dashboard';
=======
import Links from '../ui/Links';
>>>>>>> origin/master
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const history = createHistory();
const unauthenticatedPages = ['/', '/signup'];
<<<<<<< HEAD
const authenticatedPages = ['/dashboard'];
=======
const authenticatedPages = ['/links'];
>>>>>>> origin/master
let isUnauthenticatedPage = true;
let isAuthenticatedPage = false;

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
<<<<<<< HEAD
    history.push('/dashboard');
=======
    history.push('/links');
>>>>>>> origin/master
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
<<<<<<< HEAD
    history.push('/dashboard');
=======
    history.push('/links');
>>>>>>> origin/master
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.push('/');
  }
};

export const routes = (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Login} exact={true} onEnter={onEnterPublicPage}/>
      <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
<<<<<<< HEAD
      <Route path="/dashboard" component={Dashboard} onEnter={onEnterPrivatePage}/>
=======
      <Route path="/links" component={Links} onEnter={onEnterPrivatePage}/>
>>>>>>> origin/master
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);
