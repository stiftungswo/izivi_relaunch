import React from 'react';
import { Card, Progress, Button } from 'semantic-ui-react';

export default ({ mission }) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>
        {mission._id}
      </Card.Header>
      <Card.Meta>
        Übersicht über meine Einsätze
      </Card.Meta>
      <Card.Description>
        <Progress autoSuccess value={5} total={20} />
        Laufender Einsatz: Admin. 5 von 20 Tagen abgeschlossen.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button basic secondary>Zur Übersicht</Button>
    </Card.Content>
  </Card>
);
