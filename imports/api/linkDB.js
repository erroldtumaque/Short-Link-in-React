import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

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

    new SimpleSchema({
      url: {
        type: String,
        label: 'Your link',
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({url});

    LinkDB.insert({
      url,
      userId: this.userId
    });
  }
});
