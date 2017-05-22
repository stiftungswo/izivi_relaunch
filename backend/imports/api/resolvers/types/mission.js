import Users from '../../collections/users';
import Specifications from '../../collections/specifications';

export default {
  specification(mission) {
    return Specifications.findOne({ _id: mission.specificationId });
  },
  user(mission) {
    return Users.findOne({ _id: mission.userId });
  },
};
