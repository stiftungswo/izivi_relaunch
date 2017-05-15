import React from 'react';
import { Table, Icon, Button } from 'semantic-ui-react';
import Link from 'next/link';

export default ({ specifications }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Aktiviert</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {specifications.map(specification => (
        <Table.Row>
          <Table.Cell>{specification.name}</Table.Cell>
          <Table.Cell>{specification.governmentId}</Table.Cell>
          <Table.Cell>
            {specification.isActive && (
              <Icon color="green" name="checkmark" size="large" />
            )}
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell colSpan="3">
          <Link href="/admin/specifications/new">
            <Button
              floated="right"
              icon
              labelPosition="left"
              primary
              size="small"
              href="/admin/specifications/new"
            >
              <Icon name="plus" /> Hinzufügen
          </Button>
          </Link>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);
