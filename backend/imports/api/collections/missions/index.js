import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

const Missions = new Meteor.Collection('missions');

Missions.attachSchema(new SimpleSchema({
  deleted: Date,
  created: Date,
  approved: Date,
  finished: Date,
  specificationId: String,
  userId: String,
  isFirstMission: Boolean,
  isLastMission: Boolean,
  isLongMission: Boolean,
  trialDay: Date,
  start: Date,
  end: Date,
}, { requiredByDefault: false }));

export default Missions;
