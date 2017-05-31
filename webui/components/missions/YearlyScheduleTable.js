import React from 'react';
import { Table, Grid } from 'semantic-ui-react';

export default () => (
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
            <Table.Row>
              <Table.Cell>Pascal</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>John</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Pascal</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>John</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Pascal</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>John</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Pascal</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>John</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Grid.Column>
      <Grid.Column width={13} className="inner">
        <Table singleLine unstackable celled striped className="schedule">
          <Table.Header>
            <Table.Row>
              {[...Array(12)].map((value, key) => (
                    <Table.HeaderCell style={{width:'120px'}} colSpan='4' key={key}>Monat {key + 1}</Table.HeaderCell> // eslint-disable-line
                  ))}
              <Table.HeaderCell style={{ width: '120px' }} colSpan="4">Rest</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              {[...Array(52)].map((value, key) => (
                    <Table.HeaderCell style={{backgroundColor: '#F0F0F0'}} key={key}>{key + 1}</Table.HeaderCell> // eslint-disable-line
                  ))}
            </Table.Row>
            <Table.Row>
              {[...Array(52)].map((value, key) => (
                    <Table.HeaderCell key={key}>32</Table.HeaderCell> // eslint-disable-line
                  ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell negative>16</Table.Cell>
              <Table.Cell negative>&nbsp;</Table.Cell>
              <Table.Cell negative>&nbsp;</Table.Cell>
              <Table.Cell negative>&nbsp;</Table.Cell>
              <Table.Cell negative>&nbsp;</Table.Cell>
              <Table.Cell negative>&nbsp;</Table.Cell>
              <Table.Cell negative>3</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell positive>&nbsp;</Table.Cell>
              <Table.Cell positive>&nbsp;</Table.Cell>
              <Table.Cell positive>&nbsp;</Table.Cell>
              <Table.Cell positive>&nbsp;</Table.Cell>
              <Table.Cell positive>&nbsp;</Table.Cell>
              <Table.Cell positive>&nbsp;</Table.Cell>
              <Table.Cell positive>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell positive>&nbsp;</Table.Cell>
              <Table.Cell positive>&nbsp;</Table.Cell>
              <Table.Cell positive>&nbsp;</Table.Cell>
              <Table.Cell positive>&nbsp;</Table.Cell>
              <Table.Cell positive>&nbsp;</Table.Cell>
              <Table.Cell positive>&nbsp;</Table.Cell>
              <Table.Cell positive>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
              <Table.Cell>&nbsp;</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
