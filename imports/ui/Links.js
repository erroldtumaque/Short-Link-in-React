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
      <p>Link component here</p>
      <button onClick={() => this.onLogout('')}>Logout</button>
    </div>
    );
  }
}
