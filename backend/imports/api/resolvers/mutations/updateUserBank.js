import Users from '../../collections/users';

export default function (root, { bank, userId }, context) {
  const normalizedUserId = userId || context.userId;
  Users.update(normalizedUserId, {
    $set: {
      bank,
    },
  });

  Users.update({
    _id: normalizedUserId,
    'stepsCompleted.step': { $ne: 'BANK' },
  }, {
    $addToSet: {
      stepsCompleted: {
        timestamp: new Date(),
        step: 'BANK',
      },
    },
  });

  return Users.findOne(normalizedUserId);
}
