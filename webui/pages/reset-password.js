import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import FormResetPassword from '../containers/formResetPassword';
import App from '../containers/app';

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
