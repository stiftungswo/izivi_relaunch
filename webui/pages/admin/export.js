import React from 'react';
import { Container } from 'semantic-ui-react';
import App from '../../components/AppContainer';

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <p>DB Export</p>
    </Container>
  </App>
);
