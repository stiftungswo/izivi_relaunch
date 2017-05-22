import React from 'react';
import Link from 'next/link';
import { Card, Button } from 'semantic-ui-react';

export default () => (
  <Card fluid>
    <Card.Content>
      <Card.Header>
        Neuer Einsatz
      </Card.Header>
      <Card.Description>
        Bewirb dich jetzt für einen Einsatz bei der SWO
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Link href="/missions/new">
        <Button as="a" href="/missions/new" basic primary>Neuer Einsatz</Button>
      </Link>
    </Card.Content>
  </Card>
);
