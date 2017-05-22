import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import App from '../components/AppContainer';
import CardProfileProgress from '../components/CardProfileProgressContainer';
import CardMissionProgress from '../components/CardMissionProgressContainer';
import CardNewMission from '../components/CardNewMission';

export default ({ ...rest }) => (
  <App {...rest}>
    <Container>
      <Card.Group itemsPerRow={2} stackable>
        <CardProfileProgress />
        <CardNewMission />
        {/* <CardMissionProgress /> */}
      </Card.Group>
    </Container>
  </App>
);
