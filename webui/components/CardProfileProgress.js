import React from 'react';
import Link from 'next/link';
import { Card, Image, Progress, Button } from 'semantic-ui-react';

export default ({ stepsPercentageComplete, avatarUrl }) => (
  <Card>
    <Card.Content>
      <Image floated="right" size="mini" src={avatarUrl} />
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
      <Link href="/users/profile">
        {stepsPercentageComplete === 1 ? (
          <Button as="a" href="/users/profile" basic secondary>
            Bearbeiten
          </Button>
        ) : (
          <Button as="a" href="/users/profile" basic primary>
            Angaben komplettieren
          </Button>
        )}
      </Link>
    </Card.Content>
  </Card>
);
