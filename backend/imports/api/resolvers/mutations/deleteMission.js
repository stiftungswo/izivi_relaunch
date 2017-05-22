import Missions from '../../collections/missions';

export default function deleteMission(root, { _id }) {
  Missions.update({ _id }, { $set: { deleted: new Date() } });
  return Missions.findOne(_id);
}
