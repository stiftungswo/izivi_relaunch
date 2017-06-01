import React from 'react';
import Link from 'next/link';
import { Divider, Dropdown, Header } from 'semantic-ui-react';
import YearlyScheduleTable from '../../components/missions/YearlyScheduleTableContainer';

export default ({
  isSplitMode, split, changeSplit, splitOptions,
  yearOptions, changeYear, year, specifications }) => (
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

      {isSplitMode ?
      specifications && specifications.map(specification => (
        <div>
          <Divider />
          <Header>
            <Link href={{ pathname: '/admin/specifications/edit', query: { _id: specification._id } }}>
              {specification.name}
            </Link>
          </Header>
          <YearlyScheduleTable
            year={year}
            specificationId={specification._id}
          />
        </div>
      ))
     : (
       <div>
         <Divider />
         <YearlyScheduleTable year={year} />
       </div>
    )}

      {/* <Divider />
    <Header>Feldzivis</Header>
    <YearlyScheduleTable year={year} /> */}
    </main>
);
