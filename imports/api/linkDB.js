import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

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
      // Check if logged in
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
      _id: shortid.generate(),
      url,
      userId: this.userId,
      visible: true,
      visitedCount: 0,
      lastVisitedAt: null
    });
  },
  'links.setVisiblity'(_id, visible) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      },
      visible: {
        type: Boolean
      }
    }).validate({_id,visible});

    LinkDB.update({
      _id,
      userId: this.userId
    }, {
      $set: {
        visible
      }
    });
  },
  'links.trackVisit'(_id) {
    new SimpleSchema({
      _id: {
        type: String,
        min:1
      }
    }).validate({_id});

    LinkDB.update({_id},{
      $set: {
        lastVisitedAt: new Date().getTime()
      },
      $inc: {
        visitedCount: 1
      }
    })
  }
});
