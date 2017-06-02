import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

const Holidays = new Meteor.Collection('holidays');

Holidays.attachSchema(new SimpleSchema({
  date: Date,
  name: String,
  type: String,
}, { requiredByDefault: false }));

export default Holidays;