import Missions from '../../collections/missions';

export default function updateMission(root, { mission, _id }) {
  Missions.update({ _id }, { $set: mission });
  return Missions.findOne(_id);
}
