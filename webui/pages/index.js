import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import App from '../components/AppContainer';
import CardProfileProgress from '../components//CardProfileProgressContainer';
import CardProjectProgress from '../components//CardProjectProgressContainer';

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <Card.Group itemsPerRow={2} stackable>
        <CardProfileProgress />
        <CardProjectProgress />
      </Card.Group>
    </Container>
  </App>
);
