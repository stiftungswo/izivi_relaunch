import Users from '../../collections/users';

export default function (root, { input: profile, userId }, context) {
  const normalizedUserId = userId || context.userId;
  Users.update(normalizedUserId, {
    $set: {
      profile,
    },
  });

  Users.update({
    _id: normalizedUserId,
    profileStepsCompleted: {
      $elemMatch: {
        step: { $ne: 'profile' },
      },
    },
  }, {
    $addToSet: {
      profileStepsCompleted: {
        timestamp: new Date(),
        step: 'profile',
      },
    },
  });

  return Users.findOne(normalizedUserId);
}
