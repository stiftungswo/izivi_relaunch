import React from 'react';
import { Divider, Dropdown, Header } from 'semantic-ui-react';
import YearlyScheduleTable from '../../components/missions/YearlyScheduleTableContainer';

export default ({ split, changeSplit, splitOptions, yearOptions, changeYear, year }) => (
  <main>
    <span>
      Geplante Einsätze
      {' '}
      <Dropdown inline options={splitOptions} value={split} onChange={changeSplit} />
      im Jahr
      {' '}
      <Dropdown inline options={yearOptions} value={year} onChange={changeYear} />
      {' '}
    </span>
    <Header>Bürozivis</Header>
    <YearlyScheduleTable year={year} />
    <Divider />
    <Header>Feldzivis</Header>
    <YearlyScheduleTable year={year} />
  </main>
);
