import Users from '../../collections/users';

export default function (root, { insurance, userId }, context) {
  const normalizedUserId = userId || context.userId;
  Users.update(normalizedUserId, {
    $set: {
      insurance,
    },
  });

  Users.setStepCompleted({ userId: normalizedUserId, step: 'INSURANCE' });
  return Users.findOne(normalizedUserId);
}
