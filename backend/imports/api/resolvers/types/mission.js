import moment from 'moment';
import Users from '../../collections/users';
import Specifications from '../../collections/specifications';

// https://www.zivi.admin.ch/zivi/de/home/einsatzbetriebsein/waehrend-des-einsatzes/ferien.html
const HOLIDAYS_MINIMUM_DAYS_REQUIRED = 180;
const HOLIDAYS_FIRST_SLICE_DAYS = 8;
const HOLIDAYS_COTINUING_SERVICE_PER_DAYS = 30;
const HOLIDAYS_COTINUING_SERVICE_SLICE_DAYS = 2;

function serviceDaysBetween(from, to) {
  const normalizedStart = moment(from).startOf('day');
  const normalizedEnd = moment(to).startOf('day');
  const serviceDays = normalizedEnd.diff(normalizedStart, 'days') + 1;
  return (serviceDays > 0 ? serviceDays : 0);
}

const calculateServiceDays = (mission, from, to) => {
  const differenceInDays = serviceDaysBetween(from || mission.start, to || mission.end);
  return differenceInDays;
};

const calculateHolidaysTotal = (mission) => {
  const differenceInDays = serviceDaysBetween(mission.start, mission.end);
  if (differenceInDays > HOLIDAYS_MINIMUM_DAYS_REQUIRED) {
    const holidays = HOLIDAYS_FIRST_SLICE_DAYS;
    const additionalSlices = (
      (differenceInDays - HOLIDAYS_MINIMUM_DAYS_REQUIRED) /
      HOLIDAYS_COTINUING_SERVICE_PER_DAYS
    );
    return holidays + (additionalSlices * HOLIDAYS_COTINUING_SERVICE_SLICE_DAYS);
  }
  return 0;
};


export default {
  specification(mission) {
    return Specifications.findOne({ _id: mission.specificationId });
  },
  status({ sent, finished, approved }) {
    if (finished) {
      return 'FINISHED';
    } else if (approved) {
      return 'READY';
    } else if (sent) {
      return 'WAITING_AUTHORITY';
    }
    return 'DRAFT';
  },
  user(mission) {
    return Users.findOne({ _id: mission.userId });
  },
  holidayBalance(mission, args, context) {
    // TODO: Holidaytracking
    const holidaysTaken = 0;
    return calculateHolidaysTotal(mission) - holidaysTaken;
  },
  serviceDays(mission, { from, to }) {
    return calculateServiceDays(mission, from, to);
  },
};
