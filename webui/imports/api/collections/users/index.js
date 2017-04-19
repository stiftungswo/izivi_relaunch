import { Meteor } from 'meteor/meteor';
import Schema from './schema';

Meteor.users.attachSchema(Schema);

export default Meteor.users;
