import Missions from '../../collections/missions';

export default function () {
  return Missions.find({ deleted: null }).fetch();
}
