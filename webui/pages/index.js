import React from 'react';
import { Container } from 'semantic-ui-react';
import App from '../components/AppContainer';
import CardProfileProgress from '../components/CardProfileProgressContainer';
import CardListMissions from '../components/CardListMissionsContainer';
import CardNewMission from '../components/CardNewMission';

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <CardListMissions>
        <CardProfileProgress />
        <CardNewMission />
      </CardListMissions>
    </Container>
  </App>
);
