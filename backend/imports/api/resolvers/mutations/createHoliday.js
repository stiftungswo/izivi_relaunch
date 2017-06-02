import Holidays from '../../collections/holidays';

export default function createHoliday(root, { holiday }, context) {
  const _id = Holidays.insert(holiday);
  return Holidays.findOne(_id);
}
