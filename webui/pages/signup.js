import React from 'react';
import { Grid, Segment, Button, Container } from 'semantic-ui-react';
import Link from 'next/link';
import FormSignUp from '../containers/formSignUp';
import App from '../containers/app';

export default ({ ...rest }) => (
  <App {...rest} allowAnonymousAccess>
    <Container>
      <Segment>
        <h3 className="title">Registrieren</h3>
        <FormSignUp />
      </Segment>
      <Segment>
        <Grid stackable padded columns={2}>
          <Grid.Column>
            <Segment textAlign="center" basic size="mini">
              <Link prefetch href="/signin">
                <Button as="a" href="/signin" primary basic fluid>
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
