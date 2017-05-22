import { Meteor } from 'meteor/meteor';
import Schema from '../../../common/schema/mission';

const Missions = new Meteor.Collection('missions');
Missions.attachSchema(Schema);

export default Missions;
