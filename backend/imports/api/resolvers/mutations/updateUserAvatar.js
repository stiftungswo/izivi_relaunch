import Users from '../../collections/users';
import { addAvatar } from '../../collections/avatars';

export default function updateUserAvatar(root, { avatar }, context) {
  const avatarRef = addAvatar({
    avatar,
    userId: context.userId,
  });
  Users.update({ _id: context.userId }, {
    $set: {
      avatarId: avatarRef._id,
    },
  });
  return Users.findOne(context.userId);
}
