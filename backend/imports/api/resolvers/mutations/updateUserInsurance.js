import Users from '../../collections/users';

export default function (root, { insurance, userId }, context) {
  const normalizedUserId = userId || context.userId;
  Users.update(normalizedUserId, {
    $set: {
      insurance,
    },
  });

  Users.update({
    _id: normalizedUserId,
    'stepsCompleted.step': { $ne: 'INSURANCE' },
  }, {
    $addToSet: {
      stepsCompleted: {
        timestamp: new Date(),
        step: 'INSURANCE',
      },
    },
  });

  return Users.findOne(normalizedUserId);
}
