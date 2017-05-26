import React from 'react';
import { Container } from 'semantic-ui-react';
import App from '../components/AppContainer';
import CardProfileProgress from '../components/CardProfileProgressContainer';
import CardListMissions from '../components/CardListMissionsContainer';

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <CardListMissions>
        <CardProfileProgress />
      </CardListMissions>
    </Container>
  </App>
);
