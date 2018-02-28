import { Mongo } from 'meteor/mongo';

export const LinkDB = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('linksPublication', () => {
    return LinkDB.find({url:'1'});
  });
}
