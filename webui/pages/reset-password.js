import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import App from '../components/AppContainer';
import FormResetPassword from '../components/account/FormResetPasswordContainer';

export default ({ url, ...rest }) => (
  <App url={url} {...rest} allowAnonymousAccess>
    <Container>
      <Segment>
        <h3 className="title">Passwort zurücksetzen</h3>
        <FormResetPassword url={url} />
      </Segment>
    </Container>
  </App>
);
