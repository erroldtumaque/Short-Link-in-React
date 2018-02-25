import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Signup to Short Link</h1>

        signup form here

        <Link to="/">Already have an account?</Link>
      </div>
    );
  }
}
