import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import { LinkDB } from '../imports/api/linkDB';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  // Creating and registering new middleware function
  WebApp.connectHandlers.use((req, res, next)=> {
    const _id = req.url.slice(1);
    const link = LinkDB.findOne({_id});

    if (link) {
      res.statusCode = 302; //ues 404 for not found
      res.setHeader('Location', link.url);
      res.write('<h1>This is my middleware at work!</h1>');
      res.end();
    } else {
      next();
    }
  });
});
