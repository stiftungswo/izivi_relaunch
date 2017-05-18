import React from 'react';
import { Table, Icon, Label, Button } from 'semantic-ui-react';
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
      {specifications && specifications.map(specification => (
        <Table.Row key={specification._id}>
          <Table.Cell>
            {specification.name}&nbsp;
            <Link href={{ pathname: '/admin/specifications/edit', query: { _id: specification._id } }}>
              <Label as="a" horizontal basic color="blue">
                <Icon name="edit" />Bearbeiten
              </Label>
            </Link>
          </Table.Cell>
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
