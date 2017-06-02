import Holidays from '../../collections/holidays';

export default function deleteHoliday(root, { _id }) {
  Holidays.remove(_id);
  return Holidays.findOne(_id);
}
