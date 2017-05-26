import React from 'react';
import Link from 'next/link';
import { Card, Image, Progress, Button } from 'semantic-ui-react';

export default ({ stepsPercentageComplete, avatarUrl }) => (
  <Card color="black" raised>
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
          <p>Profil komplett. Bewirb dich jetzt für einen Zivildiensteinsatz bei der SWO</p>
        ) : (
          <p>Es wurden noch nicht alle nötigen Felder ausgefüllt</p>
        )}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      {stepsPercentageComplete === 1 ? (
        <div>
          <Link href="/users/profile">
            <Button as="a" href="/users/profile" basic secondary>
              Mein Profil bearbeiten
            </Button>
          </Link>
          <Link href="/missions/new">
            <Button as="a" href="/missions/new" basic primary>Neuer Einsatz</Button>
          </Link>
        </div>
      ) : (
        <Link href="/users/profile">
          <Button as="a" href="/users/profile" basic primary>
            Angaben komplettieren
          </Button>
        </Link>
      )}

    </Card.Content>
  </Card>
);
