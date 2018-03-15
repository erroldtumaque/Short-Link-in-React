import { Mongo } from 'meteor/mongo';

export const LinkDB = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('linksPublication', function() {
    // this.userId
    return LinkDB.find({userId: this.userId});
  });
}

Meteor.methods({
  'links.insert'(url) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    LinkDB.insert({
      url,
      userId: this.userId
    });
  }
});
