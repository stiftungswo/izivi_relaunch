import Users from '../../collections/users';

export default function (root, { profile, userId }, context) {
  const normalizedUserId = userId || context.userId;
  Users.update(normalizedUserId, {
    $set: {
      profile,
    },
  });

  Users.update({
    _id: normalizedUserId,
    'stepsCompleted.step': { $ne: 'PROFILE' },
  }, {
    $addToSet: {
      stepsCompleted: {
        timestamp: new Date(),
        step: 'PROFILE',
      },
    },
  });

  return Users.findOne(normalizedUserId);
}
