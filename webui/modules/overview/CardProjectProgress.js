import React from 'react';
// import Link from 'next/link';
import { Card, Progress, Button } from 'semantic-ui-react';

export default () => (
  <Card>
    <Card.Content>
      <Card.Header>
        Zivildiensteinsätze
      </Card.Header>
      <Card.Meta>
        Kontakt- und Bankangaben
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
