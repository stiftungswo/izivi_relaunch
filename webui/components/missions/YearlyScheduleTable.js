import React from 'react';
import Link from 'next/link';
import { Table, Grid } from 'semantic-ui-react';

export default ({ bodyRows, localizedWeeks, localizedMonths, averageDayUsage }) => (
  <Grid>
    <style>{`
      table.schedule {
        table-layout: fixed;
        width: 100%;
      }
      td, th {
        height: 40px;
      }
      .outer {
        position:relative;
        padding-right: 50px;
      }
      .inner {
        overflow-x:scroll;
      }
    `}</style>
    <Grid.Row className="outer">
      <Grid.Column width={3} className="inner">
        <Table singleLine unstackable celled striped className="schedule">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell style={{ backgroundColor: '#F0F0F0' }} />
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Ø {averageDayUsage}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {bodyRows.map(row => (
              <Table.Row>
                <Table.Cell>
                  <Link href={{ pathname: '/users/edit', query: { _id: row.mission.user._id } }}>
                    {row.mission.user.name}
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Grid.Column>
      <Grid.Column width={13} className="inner">
        <Table singleLine unstackable celled striped className="schedule">
          <Table.Header>
            <Table.Row>
              {localizedMonths.map(({ name, colSpan }) => (
                    <Table.HeaderCell style={{width:'120px'}} colSpan={colSpan} key={name}>{name}</Table.HeaderCell> // eslint-disable-line
                  ))}
            </Table.Row>
            <Table.Row>
              {localizedWeeks.map(({ name }) => (
                <Table.HeaderCell style={{ backgroundColor: '#F0F0F0' }} key={name}>{name}</Table.HeaderCell>
              ))}
            </Table.Row>
            <Table.Row>
              {localizedWeeks.map(({ name, sum }) => (
                <Table.HeaderCell key={name}>{sum}</Table.HeaderCell> // eslint-disable-line
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {bodyRows.map(row => (
              <Table.Row>
                {row.columns.map(({ missionId, children, ...column }) => (
                  <Link href={{ pathname: '/missions/edit', query: { _id: row.mission._id } }}>
                    <Table.Cell {...column} selectable={!!missionId}>
                      {children}
                    </Table.Cell>
                  </Link>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
