import React from 'react';
import { Card, Container, Progress, Button } from 'semantic-ui-react';
import App from '../containers/app';

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>
              Steckbrief
            </Card.Header>
            <Card.Meta>
              Kontakt- und Bankangaben
            </Card.Meta>
            <Card.Description>
              <Progress warning autoSuccess percent={20} progress />
              Es wurden noch nicht alle nötigen Felder ausgefüllt
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button basic primary>Angaben komplettieren</Button>
          </Card.Content>
        </Card>
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
      </Card.Group>
    </Container>
  </App>
);
