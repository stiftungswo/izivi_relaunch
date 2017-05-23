import Users from '../../collections/users';

export default function (root, { skills, userId }, context) {
  const normalizedUserId = userId || context.userId;
  Users.update(normalizedUserId, {
    $set: {
      skills,
    },
  });

  Users.setStepCompleted({ userId: normalizedUserId, step: 'SKILLS' });
  return Users.findOne(normalizedUserId);
}
