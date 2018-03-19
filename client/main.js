import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';

import { LinkDB } from '../imports/api/linkDB';


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

// Stateless functional components
// import React from 'react';
// const MyComponent = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//     </div>
//   );
// };

Meteor.startup(() => {
  Session.set('showVisible',true);
    ReactDOM.render(routes, document.getElementById('app'));
});
