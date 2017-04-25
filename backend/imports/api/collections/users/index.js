import { Meteor } from 'meteor/meteor';
import Schema from '../../../common/schema/user';

Meteor.users.attachSchema(Schema);

export default Meteor.users;
