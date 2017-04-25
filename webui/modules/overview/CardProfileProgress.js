import React from 'react';
import Link from 'next/link';
import { Card, Progress, Button } from 'semantic-ui-react';

export default ({ stepsPercentageComplete }) => (
  <Card>
    <Card.Content>
      <Card.Header>
        Steckbrief
      </Card.Header>
      <Card.Meta>
        Kontakt- und Bankangaben
      </Card.Meta>
      <Card.Description>
        <Progress autoSuccess percent={stepsPercentageComplete * 100} progress />
        {stepsPercentageComplete === 1 ? (
          <p>Profil komplett</p>
        ) : (
          <p>Es wurden noch nicht alle nötigen Felder ausgefüllt</p>
        )}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Link prefetch href="/profile">
        {stepsPercentageComplete === 1 ? (
          <Button as="a" href="/profile" basic secondary>
            Bearbeiten
          </Button>
        ) : (
          <Button as="a" href="/profile" basic primary>
            Angaben komplettieren
          </Button>
        )}
      </Link>
    </Card.Content>
  </Card>
);
