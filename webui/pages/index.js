import React from 'react';
import { Container } from 'semantic-ui-react';
import App from '../components/AppContainer';
import CardList from '../components/CardListContainer';

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <CardList />
    </Container>
  </App>
);
