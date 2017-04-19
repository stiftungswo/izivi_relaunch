import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import cloneDeep from 'lodash/cloneDeep';
import Users from '../../api/collections/users';

Accounts.onCreateUser((options, user = {}) => {
  const newUser = user;
  newUser.profile = options.profile || {};

  if (newUser.services.google) {
    newUser.profile = {
      name: newUser.services.google.name,
      image: { url: newUser.services.google.picture, fileId: '1' },
    };
    newUser.emails = [{ address: newUser.services.google.email, verified: true }];
  }

  if (newUser.services.facebook) {
    newUser.profile = {
      name: newUser.services.facebook.name,
      image: { url: `https://graph.facebook.com/${newUser.services.facebook.id}/picture?type=large`, fileId: '1' },
    };
    newUser.emails = [{ address: newUser.services.facebook.email, verified: true }];
  }

  const clone = cloneDeep(newUser);
  delete clone._id;
  Users.simpleSchema().validate(clone);

  Meteor.defer(() => {
    Accounts.sendVerificationEmail(newUser._id);
  });
  return newUser;
});
