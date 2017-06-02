import Holidays from '../../collections/holidays';

export default function (_, { year }) {
  return Holidays.find({
  	date: {$gte: new Date(year,0,1), $lt: new Date(year,11,31)},
  }).fetch();
}
