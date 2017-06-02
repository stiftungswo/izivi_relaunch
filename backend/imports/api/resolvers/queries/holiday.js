import Holidays from '../../collections/holidays';

export default function (root, { _id }) {
  return Holidays.findOne({ _id });
}
