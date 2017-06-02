import Holidays from '../../collections/holidays';

export default function updateHoliday(root, { _id, holiday }) {
  Holidays.update({ _id }, { $set: holiday });
  return Holidays.findOne(_id);
}
