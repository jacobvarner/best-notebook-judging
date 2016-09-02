import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Accounts.onCreateUser(function(options, user) {
  if (user.username.indexOf("team") !== -1) {
    user.role = "team";
  } else {
    user.role = "judge";
  }

  return user;
});
