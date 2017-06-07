import { Button, Container, Dropdown, Form, Header, Input, Segment, Table } from 'semantic-ui-react';

const holidayOptions = [
  {
    key: "betriebsferien",
    text: 'Betriebsferien',
    value: 'betriebsferien',
  },
  {
    key: "feiertag",
    text: 'Feiertag',
    value: 'feiertag',
  }
];

export default ({ holidays, yearOptions, year, changeYear }) => (
  <Container>
    <Header as='h1'>Feiertage & Betriebsferien</Header>

    <Segment>
      <Header as='h2'>Gewähltes Jahr</Header>
      <Dropdown placeholder='Jahr' selection scrolling options={yearOptions} value={year} onChange={changeYear}/>
    </Segment>

    <Segment>
      <Header as='h2'>Aktuelle Einträge</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Datum</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Art</Table.HeaderCell>
            <Table.HeaderCell>Operation</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {holidays && holidays.map(holiday => (
            <Table.Row key={holiday._id}>
              <Table.Cell>{new Date(holiday.date).toLocaleDateString("de-CH")}</Table.Cell>
              <Table.Cell>{holiday.name}</Table.Cell>
              <Table.Cell>{holiday.type}</Table.Cell>
              <Table.Cell>Editieren | Löschen</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>

    <Segment>
      <Header as='h2'>Neuen Eintrag erfassen</Header>
      <Form>
        <Form.Group inline>
          <Form.Field control={Input} label='Datum' type='date' />
          <Form.Field control={Input} label='Name' type='text' />
          <Form.Select label='Art' options={holidayOptions} />
          <Form.Button content='Speichern' />
        </Form.Group>
      </Form>
    </Segment>

  </Container>
);
