import React from 'react';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';

export default class AddLink extends React.Component {
  onSubmit(e) {
    const url = this.refs.url.value.trim();

    e.preventDefault();

    if (url) {
      Meteor.call('links.insert', url);
      this.refs.url.value = '';
    }
  }

  render() {
    return (<div>
      <p>
        <i>Add Link</i>
      </p>
      <form onSubmit={(e) => this.onSubmit(e)}>
        <input type="text" ref="url" placeholder="URL"/>
        <button>Add Link</button>
      </form>
    </div>);
  }
}
