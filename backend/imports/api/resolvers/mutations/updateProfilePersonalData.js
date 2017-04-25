import Users from '../../collections/users';

export default function (root, { profile, userId }, context) {
  const normalizedUserId = userId || context.userId;
  console.log(profile);
  Users.update(normalizedUserId, {
    $set: {
      profile,
    },
  });

  Users.update({
    _id: normalizedUserId,
    'profileStepsCompleted.step': { $ne: 'profile' },
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
