import React from 'react';
import Link from 'next/link';
import { Grid, Segment, Button, Container } from 'semantic-ui-react';
import App from '../components/AppContainer';
import FormRecoverPassword from '../components/account/FormRecoverPasswordContainer';

export default ({ ...rest }) => (
  <App {...rest} allowAnonymousAccess>
    <Container>
      <Segment>
        <h3 className="title">Passwort zurücksetzen</h3>
        <FormRecoverPassword />
      </Segment>
      <Segment>
        <Grid stackable padded columns={2}>
          <Grid.Column>
            <Segment textAlign="center" basic size="mini">
              <Link prefetch href="/sign-up">
                <Button as="a" href="/sign-up" primary basic fluid>
                  Noch keinen Benutzer? Registrieren
                </Button>
              </Link>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment textAlign="center" basic size="mini">
              <Link prefetch href="/sign-in">
                <Button as="a" href="/sign-in" primary basic fluid>
                  Du hast bereits einen Benutzer? Hier anmelden
                </Button>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  </App>
);
