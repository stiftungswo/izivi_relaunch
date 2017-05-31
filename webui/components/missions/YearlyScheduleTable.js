import React from 'react';
import { Table, Grid } from 'semantic-ui-react';

export default ({ bodyRows, weeksInYear, localizedMonths }) => (
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
              <Table.HeaderCell>Ø 12.0</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {bodyRows.map(row => (
              <Table.Row>
                <Table.Cell>{row.mission._id}</Table.Cell>
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
              {[...Array(weeksInYear)].map((value, key) => (
                <Table.HeaderCell style={{backgroundColor: '#F0F0F0'}} key={key}>{key + 1}</Table.HeaderCell> // eslint-disable-line
              ))}
            </Table.Row>
            <Table.Row>
              {[...Array(weeksInYear)].map((value, key) => (
                <Table.HeaderCell key={key}>32</Table.HeaderCell> // eslint-disable-line
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {bodyRows.map(row => (
              <Table.Row>
                {row.columns.map(({ ...column }) => (
                  <Table.Cell {...column} />
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
