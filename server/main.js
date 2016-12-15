import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  BrowserPolicy.content.allowOriginForAll('*');
  // code to run on server at startup

  if(Meteor.users.findOne(Meteor.settings.adminId)){
    Roles.addUsersToRoles(Meteor.settings.adminId, ['admin']);
  }
});




