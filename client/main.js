import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, withRouter } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { Tracker } from 'meteor/tracker';
import Signup from './../imports/ui/Signup';
import Links from './../imports/ui/Links';
import NotFound from './../imports/ui/NotFound';
import Login from './../imports/ui/Login';

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

  const routes = (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Login} exact={true} onEnter={onEnterPublicPage}/>
        <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
        <Route path="/links" component={Links} onEnter={onEnterPrivatePage}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
  );
  Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    const pathname = history.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    console.log('pathname: ', history.location.pathname);
    if (isUnauthenticatedPage && isAuthenticated) {
      history.push('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
      history.push('/');
    }
  });
  Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'));
  });


Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
