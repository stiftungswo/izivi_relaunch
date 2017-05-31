import { compose, withProps, pure } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import moment from 'moment';
import YearlyScheduleTable from './YearlyScheduleTable';

class Scheduler {
  constructor(year) {
    moment.locale('de');
    this.year = year;
    this.startOfYearMoment = moment().year(this.year).startOf('year');
    this.weeksInYear = this.startOfYearMoment.isoWeeksInYear();
    this.numberOfMonths = 12;
  }

  static convertMomentToDateObject(momentDate) {
    return {
      week: momentDate.isoWeek(),
      date: momentDate.date(),
      month: momentDate.month(),
      year: momentDate.isoWeekYear(),
    };
  }

  localizedMonths() {
    const months = [...moment.months()].map(month => ({
      name: month,
      colSpan: 0,
    }));
    [...Array(this.weeksInYear)].forEach((_, index) => {
      const currentWeek = moment().year(this.year).week(index + 1).startOf('week');
      months[currentWeek.month()].colSpan += 1;
    });
    return months;
  }

  normalizeMissions(missions) {
    const emptyColumn = { children: '', positive: false, negative: false, missionId: null };
    const columnsTemplate = [...Array(this.weeksInYear)].fill(emptyColumn);
    const fixedRows = missions.map((mission) => {
      const startMoment = moment(new Date(mission.start));
      const endMoment = moment(mission.end);
      const start = Scheduler.convertMomentToDateObject(startMoment);
      const end = Scheduler.convertMomentToDateObject(endMoment);
      const missionId = mission._id;
      const negative = !!(mission.status === 'DRAFT' || mission.status === 'WAITING_AUTHORITY');
      const positive = !!(mission.status === 'READY' || mission.status === 'FINISHED');
      const missionColumn = { positive, negative, missionId };
      const firstDay = {
        children: (start.year === this.year) ? start.date : '<',
        ...missionColumn,
      };
      const lastDay = {
        children: (end.year === this.year) ? end.date : '>',
        ...missionColumn,
      };
      const startColumnIndex = (start.year === this.year) ? (start.week - 1) : 0;
      const endColumnIndex = (end.year === this.year) ? (end.week - 1) : this.weeksInYear - 1;
      const columns = [...columnsTemplate];
      columns.fill(missionColumn, startColumnIndex, endColumnIndex);
      columns[startColumnIndex] = firstDay;
      columns[endColumnIndex] = lastDay;
      return { columns, mission };
    });
    return fixedRows;
  }
}

export default compose(
  graphql(gql`
    query allMissions {
      allMissions {
        _id
        status
        start
        end
        # user {
        #   _id
        # }
        specification {
          _id
        }
      }
    }
  `),
  withProps(({ data, year }) => {
    const scheduler = new Scheduler(year);
    return {
      bodyRows: (data && data.allMissions && scheduler.normalizeMissions(data.allMissions)) || [],
      weeksInYear: scheduler.weeksInYear,
      localizedMonths: scheduler.localizedMonths(),
    };
  }),
  pure,
)(YearlyScheduleTable);
