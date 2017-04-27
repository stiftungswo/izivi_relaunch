import { Meteor } from 'meteor/meteor';
import Schema from '../../../common/schema/user';

Meteor.users.attachSchema(Schema);

Meteor.users.setStepCompleted = ({ userId, step }) => Meteor.users.update({
  _id: userId,
  'stepsCompleted.step': { $ne: step },
}, {
  $addToSet: {
    stepsCompleted: {
      timestamp: new Date(),
      step,
    },
  },
});

export default Meteor.users;
