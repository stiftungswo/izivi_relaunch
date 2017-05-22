import Mission from '../../collections/missions';

export default function (root, { _id }) {
  return Mission.findOne({ _id, deleted: null });
}
