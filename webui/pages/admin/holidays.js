import React from 'react';
import { Button, Container, Dropdown, Form, Header, Input, Segment, Table } from 'semantic-ui-react';
import App from '../../components/AppContainer';

const	yearOptions = [
	  {
	    text: '2015',
	    value: '2015',
	  },
	  {
	    text: '2016',
	    value: '2016',
	  },
	  {
	    text: '2017',
	    value: '2017',
	  },
	  {
	    text: '2018',
	    value: '2018',
	  },
	  {
	    text: '2019',
	    value: '2019',
	  }
]

const	holidayOptions = [
	  {
	    text: 'Betriebsferien',
	    value: 'betriebsferien',
	  },
	  {
	    text: 'Feiertag',
	    value: 'feiertag',
	  }
]

const entryDates = [
	  {
	    id: 1,
	    date: '2017-01-01',
	    name: 'Name 1',
	    kind: 'Feiertag',
	  },
	  {
	    id: 2,
	    date: '2017-01-02',
	    name: 'Name 2',
	    kind: 'Betriebsferien',
	  },
	  {
	    id: 3,
	    date: '2017-01-03',
	    name: 'Name 3',
	    kind: 'Betriebsferien',
	  }
]

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
     	<Header as='h1'>Feiertage & Betriebsferien</Header>

	    <Segment>
	      <Header as='h2'>Gewähltes Jahr</Header>
		    <Dropdown placeholder='Jahr' selection options={yearOptions}/>
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
		        <Table.Row>
		          <Table.Cell>01.01.2017</Table.Cell>
		          <Table.Cell>Name 1</Table.Cell>
		          <Table.Cell>Feiertag</Table.Cell>
		          <Table.Cell>Editieren | Löschen</Table.Cell>
		        </Table.Row>
		        <Table.Row>
		          <Table.Cell>02.01.2017</Table.Cell>
		          <Table.Cell>Name 2</Table.Cell>
		          <Table.Cell>Feiertag</Table.Cell>
		          <Table.Cell>Editieren | Löschen</Table.Cell>
		        </Table.Row>
		        <Table.Row>
		          <Table.Cell>03.01.2017</Table.Cell>
		          <Table.Cell>Name 3</Table.Cell>
		          <Table.Cell>Betriebsferien</Table.Cell>
		          <Table.Cell>Editieren | Löschen</Table.Cell>
		        </Table.Row>
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
  </App>
);
