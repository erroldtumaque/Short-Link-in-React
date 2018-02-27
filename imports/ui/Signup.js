import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Accounts.createUser({email, password}, (err) => {
      if (err) {
      this.setState({error:err.reason});
      } else {
      this.setState({error: ''});
      }
    });
  }

=======

export default class Signup extends React.Component {
>>>>>>> origin/master
  render() {
    return (
      <div>
        <h1>Signup to Short Link</h1>

<<<<<<< HEAD
        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref="email" name="email" placeholder="Email"/>
          <input type="password" ref="password" name="password" placeholder="Password"/>
          <button>Create Account</button>
        </form>

=======
        signup form here
>>>>>>> origin/master

        <Link to="/">Already have an account?</Link>
      </div>
    );
  }
}
