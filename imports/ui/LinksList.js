import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { LinkDB } from '../api/linkDB';

export default class LinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedLinks: []
    };
  }

  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('linksPublication');
      let fetchedLinks = LinkDB.find().fetch();
      this.setState({fetchedLinks});
    });
  }

  componentWillUnmount() {
    this.linksTracker.stop();
  }

  renderLinksListItems() {
    return this.state.fetchedLinks.map((link) => {
      return <p key={link._id}>{link.url}</p>
    });
    }

  render() {
    return (
      <div>
        <p>Links List</p>
        <div>
          {this.renderLinksListItems()}
        </div>
    </div>
  );
  }
};
