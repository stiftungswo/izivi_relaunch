import Missions from '../../collections/missions';

export default function createMission(root, { mission }, context) {
  const normalizedUserId = mission.userId || context.userId;
  const _id = Missions.insert({ userId: normalizedUserId, ...mission });
  return Missions.findOne(_id);
}
