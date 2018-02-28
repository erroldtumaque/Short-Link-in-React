import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { withRouter } from 'react-router-dom';

import { LinkDB } from '../api/linkDB';
import LinksList from './LinksList';

export default class Dashboard extends React.Component {

  onLogout() {
    Accounts.logout();
  }

  onSubmit(e) {
    const url = this.refs.url.value.trim();

    e.preventDefault();

    if (url) {
      LinkDB.insert({url, userId: Meteor.userId()});
      this.refs.url.value = '';
    }
  }

  render() {
    return (
      <div>
      <h1>You are Logged In</h1>
      <button onClick={() => this.onLogout('')}>Logout</button>
      <LinksList/>
      <p><i>Add Link</i></p>
      <form onSubmit={(e) => this.onSubmit(e)}>
        <input type="text" ref="url" placeholder="URL"/>
        <button>Add Link</button>
      </form>
    </div>
    );
  }
}
