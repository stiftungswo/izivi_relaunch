import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

const Missions = new Meteor.Collection('missions');

Missions.attachSchema(new SimpleSchema({
  deleted: Date,
  created: Date,
  approved: Date,
  sent: Date,
  finished: Date,
  specificationId: String,
  userId: String,
  isTrial: Boolean,
  isLastMission: Boolean,
  isLongMission: Boolean,
  start: Date,
  end: Date,
}, { requiredByDefault: false }));

export default Missions;
