import { compose, withProps, pure } from 'recompose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import moment from 'moment';
import YearlyScheduleTable from './YearlyScheduleTable';

class Scheduler {
  constructor(year) {
    moment.locale('de');
    this.year = year;
    this.rows = [];
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

  averageDayUsage() {
    const weeks = this.localizedWeeks();
    const total = weeks.reduce((accumulator, { sum }) => accumulator + sum, 0);
    return Number(total / weeks.length).toFixed(1);
  }

  localizedWeeks() {
    const sumOfActiveMissions = [...Array(this.weeksInYear)].fill(0);
    if (this.rows) {
      this.rows.forEach((row) => {
        row.columns.forEach((column, index) => {
          if (column.missionId) {
            sumOfActiveMissions[index] += 1;
          }
        });
      });
    }
    return sumOfActiveMissions.map((sum, index) => ({
      name: index + 1,
      sum,
    }));
  }

  static convertMissionToColumn(mission) {
    const missionId = mission._id;
    const negative = !!(mission.status === 'DRAFT' || mission.status === 'WAITING_AUTHORITY');
    const positive = !!(mission.status === 'READY' || mission.status === 'FINISHED');
    return { positive, negative, missionId };
  }

  normalizeMissions(missions) {
    this.missions = missions || [];
    const emptyColumn = { children: '', positive: false, negative: false, missionId: null };
    const columnsTemplate = [...Array(this.weeksInYear)].fill(emptyColumn);
    this.rows = this.missions.map((mission) => {
      const startMoment = moment(new Date(mission.start));
      const endMoment = moment(mission.end);
      const start = Scheduler.convertMomentToDateObject(startMoment);
      const end = Scheduler.convertMomentToDateObject(endMoment);
      if (start.year > this.year || end.year < this.year) {
        return null;
      }

      const missionColumn = Scheduler.convertMissionToColumn(mission);
      const firstDay = {
        children: (start.year === this.year) ? start.date : '<',
        ...missionColumn,
      };
      const lastDay = {
        children: (end.year === this.year) ? `${end.date}` : '>',
        ...missionColumn,
      };
      const startColumnIndex = (start.year === this.year) ? (start.week - 1) : 0;
      const endColumnIndex = (end.year === this.year) ? (end.week - 1) : this.weeksInYear - 1;
      const columns = [...columnsTemplate];
      columns.fill(missionColumn, startColumnIndex, endColumnIndex);
      columns[startColumnIndex] = firstDay;
      if (endColumnIndex !== startColumnIndex) {
        columns[endColumnIndex] = lastDay;
      }

      // columns
      const colSpan = endColumnIndex - startColumnIndex;
      if (colSpan > 0) {
        columns[startColumnIndex + 1] = { colSpan, ...missionColumn };
        columns.splice(startColumnIndex + 2, colSpan - 2);
      }

      return { columns, mission };
    }).filter(row => !!row);
    return this.fixedRows;
  }
}

export default compose(
  graphql(gql`
    query allMissions($specificationId: ID) {
      allMissions(specificationId: $specificationId) {
        _id
        status
        start
        end
        user {
          _id
          name
        }
        specification {
          _id
        }
      }
    }
  `),
  withProps(({ data, year }) => {
    const scheduler = new Scheduler(year);
    scheduler.normalizeMissions(data && data.allMissions);
    return {
      bodyRows: scheduler.rows,
      weeksInYear: scheduler.weeksInYear,
      localizedMonths: scheduler.localizedMonths(),
      localizedWeeks: scheduler.localizedWeeks(),
      averageDayUsage: scheduler.averageDayUsage(),
    };
  }),
  pure,
)(YearlyScheduleTable);
