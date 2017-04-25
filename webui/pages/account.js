import React from 'react';
import { Container } from 'semantic-ui-react';
import App from '../lib/AppContainer';

export default ({ url, ...rest }) => (
  <App url={url} {...rest}>
    <Container>
      <p>Konto</p>
    </Container>
  </App>
);
