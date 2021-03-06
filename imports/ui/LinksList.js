import React from 'react';
import FlipMove from 'react-flip-move';

import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { LinkDB } from '../api/linkDB';
import LinksListItem from './LinksListItem';

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
      let fetchedLinks = LinkDB.find({
        visible: Session.get('showVisible')
      }).fetch();
      this.setState({fetchedLinks});
    });
  }

  componentWillUnmount() {
    this.linksTracker.stop();
  }

  renderLinksListItems() {
    if (this.state.fetchedLinks.length === 0) {
      return (
        <div className="item">
        <p className="item__status-message">No Links Found</p>
      </div>
      );
    }
    return this.state.fetchedLinks.map((link) => {
      // link to equal an object
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>
      //return <p key={link._id}>{link.url}</p>
    });
    }

  render() {
    return (
      <div>
        <h2>Links List</h2>
        <div>
          <FlipMove maintainContainerHeight={true}>
          {this.renderLinksListItems()}
        </FlipMove>
        </div>
    </div>
  );
  }
};
