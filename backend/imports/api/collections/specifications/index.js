import { Meteor } from 'meteor/meteor';
import Schema from '../../../common/schema/specification';

const Specifications = new Meteor.Collection('specifications');
Specifications.attachSchema(Schema);

export default Specifications;
