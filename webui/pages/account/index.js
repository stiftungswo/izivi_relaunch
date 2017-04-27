import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import App from '../../components/AppContainer';
import FormChangePassword from '../../components/account/FormChangePasswordContainer';
import FormChangeEmail from '../../components/account/FormChangeEmailContainer';

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <Segment>
        <h3 className="title">Passwort ändern</h3>
        <FormChangePassword />
      </Segment>
      <Segment>
        <h3 className="title">E-Mail ändern</h3>
        <FormChangeEmail />
      </Segment>
    </Container>
  </App>
);
