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
    'profileStepsCompleted.step': { $ne: 'PERSONAL_DATA' },
  }, {
    $addToSet: {
      profileStepsCompleted: {
        timestamp: new Date(),
        step: 'PERSONAL_DATA',
      },
    },
  });

  return Users.findOne(normalizedUserId);
}
