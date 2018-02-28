import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { withRouter } from 'react-router-dom';

export default class Links extends React.Component {

  onLogout() {
    Accounts.logout();
  }

  render() {
    return (
      <div>
      <h1>You are Logged In</h1>
      <button onClick={() => this.onLogout('')}>Logout</button>
    </div>
    );
  }
}
