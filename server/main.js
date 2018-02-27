import { Meteor } from 'meteor/meteor';
<<<<<<< HEAD
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
  // code to run on server at startup
  const employeeSchema = new SimpleSchema({
    name: {
      type: String,
      min: 1,
      max: 200
    },
    hourlyWage: {
      type: Number,
      min: 0
    },
    email: {
      type: String,
      optional: true,
      regEx: SimpleSchema.RegEx.Email
    }
  });

  employeeSchema.validate({
    name: 'Errold',
    hourlyWage: 24,
    email: 'errold.tumaque@gmail.com'
  });
=======

Meteor.startup(() => {
  // code to run on server at startup
>>>>>>> origin/master
});
