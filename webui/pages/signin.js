import React from 'react';
import { Grid, Segment, Button, Container } from 'semantic-ui-react';
import Link from 'next/link';
import FormSignIn from '../containers/formSignIn';
import App from '../containers/app';

export default ({ ...rest }) => (
  <App {...rest} allowAnonymousAccess>
    <Container>
      <Segment>
        <h3 className="title">Anmelden</h3>
        <FormSignIn />
      </Segment>
      <Segment>
        <Grid stackable padded columns={2}>
          <Grid.Column>
            <Segment textAlign="center" basic size="mini">
              <Link prefetch href="/signup">
                <Button as="a" href="/signup" primary basic fluid>
                  Noch keinen Benutzer? Registrieren
                </Button>
              </Link>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment textAlign="center" basic size="mini">
              <Link prefetch href="/recover-password">
                <Button as="a" href="/signup" basic secondary fluid>
                  Passwort zurücksetzen
                </Button>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  </App>
);
