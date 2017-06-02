import Holidays from '../../collections/holidays';

export default function deleteHoliday(root, { _id }) {
  Holidays.update({ _id });
  return Holidays.findOne(_id);
}
