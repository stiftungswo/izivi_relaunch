import Users from '../../collections/users';

export default function (root, { bank, userId }, context) {
  const normalizedUserId = userId || context.userId;
  Users.update(normalizedUserId, {
    $set: {
      bank,
    },
  });

  Users.setStepCompleted({ userId: normalizedUserId, step: 'BANK' });
  return Users.findOne(normalizedUserId);
}
