import Missions from '../../collections/missions';

export default function (_, { specificationId }) {
  return Missions.find({
    deleted: null,
    specificationId: specificationId || { $ne: null },
  }).fetch();
}
